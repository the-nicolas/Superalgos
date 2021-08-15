exports.newFoundationsUtilitiesPlugins = function () {

    let thisObject = {
        getPluginFileNames: getPluginFileNames,
        getPluginFileContent: getPluginFileContent
    }

    return thisObject

    async function getPluginFileNames(project, folder) {
        let promise = new Promise((resolve, reject) => {

            let path = global.env.PATH_TO_PROJECTS + '/' + project + '/Plugins/' + folder

            CL.nodeModules.fs.readdir(path, (err, files) => {
                if (err) {
                    reject()
                    return
                }
                if (files === undefined) {
                    files = []
                }
                resolve(files)
            })

        }
        )
        return promise
    }

    async function getPluginFileContent(project, folder, fileName) {
        let promise = new Promise((resolve, reject) => {

            let path = global.env.PATH_TO_PROJECTS + '/' + project + '/Plugins/' + folder + '/' + fileName

            CL.nodeModules.fs.readFile(path, onFileRead)

            function onFileRead(err, file) {
                if (err) {
                    reject()
                    return
                }
                resolve(file.toString())
            }
        }
        )
        return promise
    }
}