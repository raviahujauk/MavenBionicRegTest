node('master') {

		repoURL = 'https://github.com/raviahujauk/MavenBionicRegTest.git'

		stage("Prepare Workspace") {
            echo 'testing'
            cleanWs()
			env.WORKSPACE_LOCAL=sh(returnStdout:true,script:'pwd').trim()
			echo"Workspace set to:"+env.WORKSPACE_LOCAL
			echo"BUILD_ID: "+ BUILD_ID
			echo"TAG_UNIXTIME: "+env.TAG_UNIXTIME
			echo"TAG_DATE: "+env.TAG_DATE
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
					"summary": "Automated Regression Execution @ ''' + env.build_timestamp + ' ' + environment +''' ",
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