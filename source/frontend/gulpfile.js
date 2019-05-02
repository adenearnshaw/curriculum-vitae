const gulp = require('gulp');
const fs = require('fs');

const projectViewsDirectory = './src/app/projects/data/';
const projectDataFile = './src/assets/data/projects.json';

gulp.task('clean', () => {
    return del(['./dist/**/*'], { force: true });
});

gulp.task('update-project-data', (done) => {
    const htmlFiles = fs.readdirSync(projectViewsDirectory)
                        .filter(file => file.endsWith('.html'));

    const projectDataJson = fs.readFileSync(projectDataFile, { encoding: 'utf8'});
    const projectData = JSON.parse(projectDataJson);

    htmlFiles.forEach(file => {
        const htmlContents = fs.readFileSync(`${projectViewsDirectory}${file}`, { encoding: 'utf8'});

        const projectId = file.replace('.html', '');
        projectData.find(p => p.id === projectId).description = htmlContents;
    });

    fs.writeFileSync(projectDataFile, JSON.stringify(projectData, null, '    '));

    done();
});

