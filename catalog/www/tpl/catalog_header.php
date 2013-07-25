<tr>
    <td colspan="2">
        <font size="2" face="Tahoma, sans-serif;" color="#000000"
              style="font-family: Tahoma,Arial; font-size: 14px; color: #000000; text-decoration: none;">
            Здравствуйте!<br/><br/>
            <?=$data->catalog->header->text?>
        </font>
    </td>
</tr>
<tr>
    <td colspan="2">
        <img src="http://www.mvideo.ru/img/mailer/0.gif" width="600" height="9" alt=""/>
    <td>
</tr>
<? if ($data->catalog->header->banners): foreach ($data->catalog->header->banners as $banner): ?>
    <tr>
        <td colspan="2">
            <? print_image($banner); ?>
        <td>
    </tr>
    <tr>
        <td colspan="2">
            <img src="http://www.mvideo.ru/img/mailer/0.gif" width="600" height="10" alt=""/>
        <td>
    </tr>
<? endforeach; endif; ?>
<tr>
    <td colspan="2">
        <img src="http://www.mvideo.ru/img/mailer/0.gif" width="600" height="17" alt=""/>
    <td>
</tr>