pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Basirat-Zahra/QA-Projects.git'
            }
        }

        stage('Lint Code') {
            steps {
                dir('Cypress Tests') {
                    sh 'npm install'
                    sh 'npx eslint cypress/e2e/*.js || true'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cypress-tests .'
            }
        }

        stage('Run Cypress Tests in Container') {
            steps {
                sh 'docker run cypress-tests'
            }
        }
    }

}
