pipeline {
    agent any
    tools {
        maven 'Apache-Maven-3.6.9'
    }
    stages {
        stage ('Compile Stage') {
            steps {
                sh 'printenv'
                withMaven(mavenSettingsConfig: 'maven-settings-global') {
                    sh 'mvn clean package'
                    // Run the maven build
                    //sh "mvn clean verify"
                    //sh 'mvn clean install'
                }
            }
        }
            stage('Test Stage') {
                steps {
                    withMaven(maven: 'Apache-Maven-3.6.9') {
                        sh 'mvn test'
                    }
                }
            }
            stage('Cucumber Reports') {
                steps {
                    cucumber buildstatus: "UNSTABLE",
                        fileIncludePattern: "**/cucumber.json",
                    jsonReportDirectory: 'TargetReport'
                }
            }

        }
    }