pipeline{
    agent any
    
    stages {
        stage('Clone Repository'){
            steps{
                git url: "https://github.com/Basirat-Zahra/QA-Projects.git"
            }
        }
        stage('Run Cypress Tests in Docker'){
            steps{
                dir('Cypress Tests'){
                    script{
                        sh '''
                           docker run -it --rm \
                           -v \$PWD:/e2e \
                           -w /e2e \
                           cypress/included:12.17.4
                           '''
                    }
                }
            }
        }
    }
}
