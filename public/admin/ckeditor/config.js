CKEDITOR.editorConfig = function (config) {
    // config.allowedContent = true;
    // // config.extraPlugins = 'zoo_additional_content';
    //
    // // config.extraPlugins = 'typofilter';
    //
    // config.toolbar_Base =
    //     [
    //         {name: 'document', items: ['Maximize', '-', 'Source']},
    //         {name: 'editing', items: ['Cut', 'Copy', 'PasteText', '-', 'Undo', 'Redo']},
    //         {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
    //         {name: 'insert', items: ['Image', 'MediaEmbed', '-', 'Table', 'SpecialChar']},
    //         '/',
    //         {name: 'basicstyles', items: ['RemoveFormat', '-', 'Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript']},
    //         {name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyCenter']},
    //         {name: 'styles', items: ['Format', 'Blockquote']},
    //         // {name: 'additional', items: ['MyWidget']},
    //     ];
    // config.toolbar = 'Base';

    // config.removeButtons = 'Paste,autoFormat,CommentSelectedRange,UncommentSelectedRange,AutoComplete,Outdent,Indent,oembed,Save,Styles,Font,FontSize,Flash';
    config.removeButtons = 'Paste,Save,Styles,Font,FontSize,Flash,Sourcedialog,Outdent,Indent';

    config.format_tags = 'h2;h3;h4;h5;h6;p';
    config.forcePasteAsPlainText = true;
    config.language = 'ru';
    config.height = '350px';

    config.removeDialogTabs = 'image:advanced;link:advanced';
    config.contentsCss = '/admin/ckeditor/ckeditor_preview.css';
};
