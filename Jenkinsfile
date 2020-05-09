pipeline {
    agent any
    stages {
        stage ('Compile Stage') {
            steps {
                withMaven(// Maven installation declared in the Jenkins "Global Tool Configuration"
                        maven: 'maven-3',
                        // Maven settings.xml file defined with the Jenkins Config File Provider Plugin
                        // We recommend to define Maven settings.xml globally at the folder level using
                        // navigating to the folder configuration in the section "Pipeline Maven Configuration / Override global Maven configuration"
                        // or globally to the entire master navigating to  "Manage Jenkins / Global Tools Configuration"
                        //mavenSettingsConfig: 'my-maven-settings'
                ) {

                    // Run the maven build
                    //sh "mvn clean verify"
                    sh 'mvn clean install'
                }
            }
        }
            stage('Test Stage') {
                steps {
                    withMaven(maven: 'maven-3') {
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