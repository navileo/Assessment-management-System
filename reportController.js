const data = require('./data');
const config = require('./config');
const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

// Helper function to get nested property from an object using a string path
const getNestedProperty = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

exports.generateReport = async (req, res) => {
    const { session_id } = req.query; // Assuming GET request for now, can be POST
    console.log('Received session_id:', session_id);

    if (!session_id) {
        return res.status(400).json({ message: 'session_id is required.' });
    }

    const assessment = data.getAssessmentData(session_id);
    console.log('Assessment data:', assessment);

    if (!assessment) {
        return res.status(404).json({ message: 'Assessment data not found for the given session_id.' });
    }

    const reportConfig = config.getReportConfig(assessment.assessment_id);
    console.log('Report config:', reportConfig);

    if (!reportConfig) {
        return res.status(404).json({ message: `Report configuration not found for assessment_id: ${assessment.assessment_id}` });
    }

    try {
        const baseDir = process.cwd();
        const templatePath = path.join(baseDir, reportConfig.template);
        console.log('Template path:', templatePath);
        let htmlTemplate = await fs.readFile(templatePath, 'utf8');

        // Replace placeholders with actual data and config
        htmlTemplate = htmlTemplate.replace('<!--REPORT_DATA-->', JSON.stringify(assessment));
        htmlTemplate = htmlTemplate.replace('<!--REPORT_CONFIG-->', JSON.stringify(reportConfig));

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(htmlTemplate, { waitUntil: 'networkidle0' });
        const pdfPath = path.join(baseDir, 'reports', `${session_id}_report.pdf`);
        await page.pdf({ path: pdfPath, format: 'A4' });

        await browser.close();

        res.download(pdfPath, `${session_id}_report.pdf`, (err) => {
            if (err) {
                console.error('Error sending file:', err);
                res.status(500).json({ error: 'Error downloading PDF report.' });
            }
        });
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Error generating PDF report.' });
    }
};