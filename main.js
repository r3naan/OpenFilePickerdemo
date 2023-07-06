let fileHandle;

async function buttontest() {
    [fileHandle] = await window.showOpenFilePicker({
        types: [
            {
                description: 'Not JavaScript',
                accept: {
                    'image/*': ['.py', '.js', '.html']
                },
            },
        ],
        excludeAcceptAllOption: true,
        multiple: false,

    });
    let fileData = await fileHandle.getFile();
    console.log(fileData)
    let text = await fileData.text();
    textarea.innerText = text;
}

async function save() {
    let stream = await fileHandle.createWritable();
    await stream.write(textarea.innerText);
    await stream.close();
}

async function saveAs() {
    fileHandle = await window.showSaveFilePicker();
    save()
}

document.body.style.backgroundColor = "lightblue";
