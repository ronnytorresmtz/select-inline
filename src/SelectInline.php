<?php

namespace Ronnytorresmtz\SelectInline;

use Laravel\Nova\Fields\Field;

class SelectInline extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'select-inline';

    /**
     * Set the options for the select menu.
     *
     * @param  array  $options
     * @return $this
     */
    public function options($options)
    {
        return $this->withMeta([
            'options' => collect($options ?? [])->map(function ($label, $value) {
                return is_array($label) ? $label + ['value' => $value] : ['label' => $label, 'value' => $value];
            })->values()->all(),
        ]);
    }

    /**
     * Display values using their corresponding specified labels.
     *
     * @return $this
     */
    public function displayUsingLabels()
    {
        
        return $this->withMeta(['displayUsingLabels' => true]);
        
    }

    public function maxWidth($value) 
    {
        return $this->withMeta(['maxWidth' => 'max-width:' . $value]);
    }

}
