pipeline {
    agent any

    stages {
        stage("build") {
            steps {
                echo 'building the application...'
                sh 'echo "npm:"; npm -v'
                sh 'echo "node:"; node -v'
                sh 'echo "docker:"; docker --version'
                sh 'echo "aws:"; aws --version'
                sh 'echo "sam:"; sam --version'
            }
        }

        stage("test") {
            steps {
                echo 'testing the application...'
            }
        }

        stage("deploy") {
            steps {
                echo 'deploying the application...'
            }
        }
    }
}

node {

}