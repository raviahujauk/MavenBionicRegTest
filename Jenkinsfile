node('master') {

		repoURL = 'https://github.com/raviahujauk/MavenBionicRegTest.git'
<<<<<<< HEAD
=======

		stage("Prepare Workspace") {
            echo 'testing'
            cleanWs()
			env.WORKSPACE_LOCAL=sh(returnStdout:true,script:'pwd').trim()
			echo"Workspace set to:"+env.WORKSPACE_LOCAL
			echo"Build time: "+env.BUILD_TIME
		}
		stage('Checkout Self') {
		git branch:'xray',credentialsId:'',url:repoURL
		}
		stage('Cucumber Tests') {
			withMaven(maven:'M3') {
				sh """
					cd ${env.WORKSPACE_LOCAL}
					mvn clean test
				"""
			}
		}
		stage('Expose report'){
			archive "**/cucumber.json"
			cucumber '**/cucumber.json'
		}
}
>>>>>>> master

		stage("Prepare Workspace") {
            echo 'testing'
            cleanWs()
			env.WORKSPACE_LOCAL=sh(returnStdout:true,script:'pwd').trim()
			echo"Workspace set to:"+env.WORKSPACE_LOCAL
			echo"BUILD_ID: "+env.BUILD_ID

		}

		stage('Checkout Self') {
		git branch:'xray',credentialsId:'',url:repoURL
		}

		stage('Cucumber Tests') {
			withMaven(maven:'M3') {
				sh """
					cd ${env.WORKSPACE_LOCAL}
					mvn clean test
				"""
			}
		}

		stage('Expose report'){
			archive "**/cucumber.json"
			cucumber '**/cucumber.json'
		}
	stage('Import result to Xray') {
		def description = "[BUILD_URL|${env.BUILD_URL}]"
		def labels = '["regression","automated_regression"]'
		def environment = "Staging"
		def testExecutionFieldId = 10013
		def testEnvironmentFieldName = "customfield_10032"
		def projectKey = "DIG"
		def xrayConnectorId = '7c28c556-dcd8-4d5b-9b71-16be7922e2d3'
		def info = ''' {
					"fields": {
					"project": {
					"key": "''' + projectKey + '''"
					},
					"labels":'''+ labels + ''',
					"description":"''' + description + '''",
					"summary": "Automated Regression Execution @ ''' + env.BUILD_ID + ' ' + environment +''' ",
					"issuetype":{
					"id": "''' + testExecutionFieldId + '''"
					},
					"''' + testEnvironmentFieldName + '''" : [
					"''' + environment + '''"
					]
					}
					}'''
				echo info

		step([$class: 'XrayImportBuilder', endpointName: '/cucumber/multipart', importFilePath: 'TargetReport/cucumber.json', importInfo: info, inputInfoSwitcher: 'fieldContent', serverInstance: xrayConnectorId])
	}
}