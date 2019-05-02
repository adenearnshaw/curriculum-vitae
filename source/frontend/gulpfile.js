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


    const orderedData = projectData.sort((p1, p2) => p1.order < p2.order ? -1
                                                   : p1.order > p2.order ? 1
                                                   : 0);

    fs.writeFileSync(projectDataFile, JSON.stringify(orderedData, null, '    '));

    done();
});

