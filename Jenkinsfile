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
                nodejs('node-10.16.3') {
                    sh 'echo "In the if condition"'
                    sh 'echo "npm:"; npm -v'
                    sh 'echo "node:"; node -v'
                }
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