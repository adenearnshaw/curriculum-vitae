const gulp = require('gulp');
const fs = require('fs');

const projectsDirectory = './src/assets/projects/data/';

gulp.task('clean', () => {
    return del(['./dist/**/*'], { force: true });
});

gulp.task('update-project-data', (done) => {
    const htmlFiles = fs.readdirSync(projectsDirectory)
                        .filter(file => file.endsWith('.html'));

    htmlFiles.forEach(file => {
        const htmlContents = fs.readFileSync(`${projectsDirectory}${file}`, { encoding: 'utf8'});

        const jsonFile = file.replace('.html', '.json');
        const jsonContents = fs.readFileSync(`${projectsDirectory}${jsonFile}`, { encoding: 'utf8'});

        const data = JSON.parse(jsonContents);
        data.description = htmlContents;

        fs.writeFileSync(`${projectsDirectory}${jsonFile}`, JSON.stringify(data));
    });

    done();
});

