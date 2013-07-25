<?php

function download($url)
{
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $data = curl_exec($curl);
    curl_close($curl);
    return $data;
}

function get_image_size($url)
{
    $raw = download($url);
    $im = imagecreatefromstring($raw);

    $width = imagesx($im);
    $height = imagesy($im);

    return array('w' => $width, 'h' => $height);
}

function print_image($image)
{
    global $data;

    if($image->url){
        echo '<a href="http://www.mvideo.ru/'.$image->url.'?reff='.$data->reff.'">';
    }

    $img_src = $data->images_url . (is_string($image) ? $image : $image->src);
    $sizes = get_image_size($img_src);

    if (!$image->areas) {
        echo '<img src="' . $img_src . '" border="0" width="' . $sizes['w'] . '" height="' . $sizes['h'] . '" alt="' . (is_string($image) ? '' : $image->alt) . '"/>';
    } else {
        $img_id = "img_" . (rand() % 100000);
        echo '<img src="' . $img_src . '" usemap="#' . $img_id . '" border="0" width="' . $sizes['w'] . '" height="' . $sizes['h'] . '" alt="' . (is_string($image) ? '' : $image->alt) . '"/><map id="' . $img_id . '" name="' . $img_id . '">';
        foreach ($image->areas as $area) {
            echo '<area target="_blank" alt="" href="' . $area->url . '?reff=' . $data->reff . '" shape="rect" coords="' . $area->coords . '"/>';
        }
        echo '</map>';
    }

    if($image->url){
        echo '</a>';
    }
}

?>