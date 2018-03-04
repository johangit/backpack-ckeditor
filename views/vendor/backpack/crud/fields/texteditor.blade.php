<div @include('crud::inc.field_wrapper_attributes') >
    <label>{!! $field['label'] !!}</label>
    @include('crud::inc.field_translatable_icon')
    <textarea
            class="js-texteditor"
            name="{{ $field['name'] }}"
            @include('crud::inc.field_attributes')
    ></textarea>

    {{-- HINT --}}
    @if (isset($field['hint']))
        <p class="help-block">{!! $field['hint'] !!}</p>
    @endif
</div>


<?php
$textEditorValue = old($field['name']) ? old($field['name']) : (isset($field['value']) ? $field['value'] : (isset($field['default']) ? $field['default'] : ''));
$textEditorValue = str_replace(["\n", "\r"], "", $textEditorValue);
$textEditorValue = str_replace('"', '\"', $textEditorValue);
?>
<script type="text/javascript">
    window.ckeditorInitValues = window.ckeditorInitValues || {};
    window.ckeditorInitValues["{{ $field['name'] }}"] = "<?php echo($textEditorValue) ?>";
</script>

@if ($crud->checkIfFieldIsFirstOfItsType($field, $fields))
    @push('crud_fields_styles')
        <link href="/admin/crud/texteditor/widget.css" rel="stylesheet"/>
    @endpush

    @push('crud_fields_scripts')
        <script src="/admin/ckeditor/ckeditor.js"></script>
        <script src="/admin/crud/texteditor/widget.js"></script>
    @endpush
@endif