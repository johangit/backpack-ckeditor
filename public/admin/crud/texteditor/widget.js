$(function () {
    var token = $("input[name=_token]").val(),
        adminUrl = "/" + window.location.href.split("/")[3];


    $(".js-texteditor").each(function () {
        var editor = CKEDITOR.replace(this, {
            filebrowserImageBrowseUrl: adminUrl + '/elfinder/ckeditor',
            // filebrowserImageUploadUrl: adminUrl + '/elfinder/connector?_token=' + token + "&cmd=upload&target=l1_Lw",
            // filebrowserBrowseUrl: adminUrl + '/elfinder/ckeditor',
            // filebrowserUploadUrl: adminUrl + '/elfinder/ckeditor'
        });

        editor.on('instanceReady', function (evt) {
            try {
                var textEditorVaule = window.ckeditorInitValues[$(this).attr("name")];
                evt.editor.insertHtml(textEditorVaule);
            } catch (e) {
            }
        });
    });

    // config.filebrowserBrowseUrl = '/elfinder/ckeditor';

    CKEDITOR.on('dialogDefinition', function (ev) {
        var dialogName = ev.data.name;
        var dialogDefinition = ev.data.definition;
        var dialog = dialogDefinition.dialog;
        var editor = ev.editor;

        if (dialogName == 'image') {
            dialogDefinition.onOk = function (e) {
                var imageSrcUrl = e.sender.originalElement.$.src;
                // imageSrcUrl = imageSrcUrl.replace(/laravel-filemanager/, "uploads/filemanger");

                var imgHtml = CKEDITOR.dom.element.createFromHtml('<img src="' + imageSrcUrl + '" />');

                editor.insertElement(imgHtml);
            };
        }
    });


    CKEDITOR.timestamp = 'up2017';
});