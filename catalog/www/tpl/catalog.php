<tr>
    <td colspan="2">
        <center>
            <table width="558" cellspacing="0" cellpadding="0" border="0">
                <? foreach ($data->catalog->items as $ind => $item): ?>
                    <? if ($ind % 2 == 0): ?>
                        <tr>
                    <? endif; ?>
                    <td width="258" style="vertical-align: top"><? include "item.php";?></td>
                    <? if ($ind % 2 == 0): ?>
                        <td width="42">
                            <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="42"
                                                             height="6" alt=""/></div>
                        </td>
                    <? endif; ?>
                    <? if ($ind % 2 == 1): ?>
                        </tr>
                        <tr><td colspan="3">
                                <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="100%"
                                                                 height="35" alt=""/></div>
                        </td> </tr>
                    <? endif; ?>
                <? endforeach; ?>
            </table>
        </center>
    </td>
</tr>