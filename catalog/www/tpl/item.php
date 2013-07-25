<table cellspacing="0" cellpadding="0" border="0" width="100%">

    <tr>
        <td height="32" style="height:32px;vertical-align:top;line-height:13px;">
            <a href="http://www.mvideo.ru/products/<?= $item->alias ?>.html?reff=<?= $data->reff ?>" target="_blank"
               style="color:#000000; text-decoration: none;">
                <font size="1" face="Tahoma, sans-serif;" color="#000000"
                      style="font-family: Tahoma,Arial; font-size: 11px; color: #000000; text-decoration: none;">
                    <b><?=$item->category?></b><br/><?=$item->model?>
                </font>
            </a>
        </td>
    </tr>

    <tr>
        <td>
            <a href="http://www.mvideo.ru/products/<?= $item->alias ?>.html?reff=<?= $data->reff ?>" target="_blank">
                <? print_image($item->image);?>
            </a>
        </td>
    </tr>

    <tr>
        <td>
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td>
                        <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="27"
                                                         height="6" alt=""/></div>
                    </td>
                    <td align="right" width="110"><font size="2" face="Tahoma, sans-serif;" color="#666666"
                                                        style="font-family: Tahoma,Arial; font-size: 14px; color: #666666;"><b><?=$item->old_price?></b></font>
                    </td>
                    <td>
                        <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="27"
                                                         height="6" alt=""/></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="27"
                                                         height="6" alt=""/></div>
                    </td>
                    <td align="right"><font size="5" face="Tahoma, sans-serif;" color="#000000"
                                            style="font-family: Tahoma,Arial; font-size: 30px; line-height:32px; color: #000000;"><b><?=$item->price?></b></font>
                    </td>
                    <td>
                        <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="27"
                                                         height="6" alt=""/></div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>
            <img src="http://www.mvideo.ru/img/mailer/0.gif" width="5" height="7" alt=""/>
        </td>
    </tr>

    <tr bgcolor="#fff736" height="18" style="height: 18px;">
        <td bgcolor="#fff736" height="18" style="height: 18px;" align="center">
            <font size="1" face="Tahoma, sans-serif;" color="#000000"
                  style="font-family: Tahoma,Arial; font-size: 11px; color: #000000;"><?=$item->yellow?></font>
        </td>
    </tr>
    <tr bgcolor="#ed1c29" height="28" style="height: 28px;">
        <td bgcolor="#ed1c29" height="28" style="height: 28px;" align="center">
            <a href="http://www.mvideo.ru/products/<?=$item->alias?>.html?reff=<?=$data->reff?>"
                target="_blank" style="color:#ffffff; text-decoration: none;">
                <font size="2" face="Tahoma, sans-serif;" olor="#ffffff" style="font-family: Tahoma,Arial; font-size: 14px; color: #ffffff;"><b>КУПИТЬ</b></font>
            </a>
        </td>
    </tr>

    <tr>
        <td>
            <img src="http://www.mvideo.ru/img/mailer/0.gif" width="5" height="10" alt=""/>
        </td>
    </tr>

    <tr>
        <td height="80" valign="top">
            <? foreach($item->features as $feature):?>
             <font color="#000000">• </font>
                <font size="1" face="Tahoma, sans-serif;" color="#000000" style="font-family: Tahoma,Arial;font-size: 11px; color: #000000;"><?=$feature?></font>
                <br/>
            <? endforeach; ?>
        </td>
    </tr>
    <tr>
        <td><img src="http://www.mvideo.ru/img/mailer/0.gif" width="5" height="12" alt=""/></td>
    </tr>

    <tr>
        <td>
            <center>
                <a href="http://www.mvideo.ru/<?=$item->all_url?>?reff=<?=$data->reff?>" target="_blank"
                       style="color:#475c71; text-decoration: underline;">
                    <font size="1" face="Tahoma, sans-serif;" color="#475c71" style="font-family: Tahoma,Arial; font-size: 11px; text-transform: uppercase; color: #475c71;">
                        <b><?=$item->all_label?></b>
                    </font>
                </a>
            </center>
        </td>
    </tr>
</table>