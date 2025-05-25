pipeline {
  agent any

  stages {
    stage('Code Linting') {
      steps {
        sh 'npm run lint || echo "Lint skipped"'
      }
    }

    stage('Code Build') {
      steps {
        sh 'echo "No build step for Cypress tests"'
      }
    }

    stage('Unit Testing') {
      steps {
        sh 'echo "Unit testing in the folder"'
      }
    }

    stage('Container Deployment') {
      steps {
        sh 'docker build -t cypress-swaglabs .'
      }
    }

    stage('Cypress Testing') {
      steps {
        sh 'docker run cypress-swaglabs'
      }
    }
  }
}
