pipeline {
    agent any
    tools {
        maven 'M3'
        mavenSettingsConfig: 'Global Maven Settings'
        //jdk 'jdk8'
    }
    stages {
        stage ('Compile Stage') {
            steps {
                sh 'printenv'
                withMaven(maven: 'M3') {
                    sh 'mvn clean package'
                    // Run the maven build
                    //sh "mvn clean verify"
                    //sh 'mvn clean install'
                }
            }
        }
            stage('Test Stage') {
                steps {
                    withMaven(maven: 'M3') {
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