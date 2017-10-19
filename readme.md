# Laravel Backpack CKeditor

CKeditor with customize:

- pasted images removed width/height attributes (required for responsive sites)
- source widget uses only allowed tags
- remove undesirable buttons
- table has default 100% width 
- pasted data has text value (not html)


## Install on Laravel 5.5
 
1) Install using composer (run in your terminal):

```bash
composer require johan-code/backpack-ckeditor
```

2) Publish (run in your terminal):

```bash
php artisan vendor:publish --provider="JohanCode\BackpackCkeditor\ServiceProvider"
```