<tr>
    <td colspan="2">
        <table width="600" cellspacing="0" cellpadding="4" border="0">
            <tbody>
            <tr>
                <td width="175" valign="top"><font size="2" face="Tahoma, Arial, Helvetica, sans-serif" color="#000000"
                                                   style="font-family: Tahoma, Arial; font-size: 12px; color: #000;">
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/discount/?reff=<?= $data->reff ?>" target="_blank"><font size="2"
                                                                                                               color="#000000"
                                                                                                               style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;"><b>Акции</b></font></a><br/><br/>
                        <? foreach ($data->footer->stocks as $stock): ?>
                            <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                               href="http://www.mvideo.ru/<?= $stock->url ?>?reff=<?= $data->reff ?>" target="_blank">
                                <font size="2" color="#000000"
                                      style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;"><?=$stock->label?></font></a>
                            <br/>
                        <? endforeach; ?>
                    </font></td>
                <td width="24"><br></td>

                <td width="170" valign="top"><font size="1" face="Tahoma, Arial, Helvetica, sans-serif" color="#000000"
                                                   style="font-family: Tahoma, Arial; font-size: 11px; color: #000;">
                        <font size="2" color="#000000"
                              style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;text-decoration: underline"><b>Категории</b></font><br/><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/price/lvl_1/class_1/?reff=<?= $data->reff ?>"
                           target="_blank"><font size="2" color="#000000"
                                                 style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Телевизоры</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/price/lvl_109/class_484/?reff=<?= $data->reff ?>" target="_blank"><font
                                size="2" color="#000000"
                                style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Видеоплееры</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/price/lvl_11/class_12/?reff=<?= $data->reff ?>"
                           target="_blank"><font size="2" color="#000000"
                                                 style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">MP3-плееры</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/price/lvl_11/class_7/?reff=<?= $data->reff ?>"
                           target="_blank"><font size="2" color="#000000"
                                                 style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Музыкальные
                                центры</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/price/lvl_8/class_130/?reff=<?= $data->reff ?>"
                           target="_blank"><font size="2" color="#000000"
                                                 style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Ноутбуки</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/price/lvl_8/class_328/?reff=<?= $data->reff ?>"
                           target="_blank"><font size="2" color="#000000"
                                                 style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Планшеты</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/price/lvl_116/class_13/?reff=<?= $data->reff ?>"
                           target="_blank"><font size="2" color="#000000"
                                                 style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Электронные
                                книги</font></a><br/>

                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/price/lvl_12/class_357/?reff=<?= $data->reff ?>"
                           target="_blank"><font size="2" color="#000000"
                                                 style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Смартфоны</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/price/lvl_14/class_261/?reff=<?= $data->reff ?>"
                           target="_blank"><font size="2" color="#000000"
                                                 style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Зеркальные
                                фотоаппараты</font></a><br/>

                    </font></td>
                <td width="25"><br></td>

                <td width="205" valign="top">
                    <font size="1" face="Tahoma, Arial, Helvetica, sans-serif" color="#000000"
                          style="font-family: Tahoma, Arial; font-size: 11px; color: #000;">
                        <br><br>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/price/lvl_14/class_117/?reff=<?= $data->reff ?>"
                           target="_blank"><font size="2" color="#000000"
                                                 style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Компактные
                                цифровые<br/>фотоаппараты</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/catalog/lvl_2/?reff=<?= $data->reff ?>" target="_blank"><font
                                size="2" color="#000000"
                                style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Бытовая
                                техника</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/catalog/lvl_3/?reff=<?= $data->reff ?>" target="_blank"><font
                                size="2" color="#000000"
                                style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Кухонная
                                техника</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/catalog/lvl_4/?reff=<?= $data->reff ?>" target="_blank"><font
                                size="2" color="#000000"
                                style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Встраиваемая
                                бытовая техника</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/catalog/lvl_102/?reff=<?= $data->reff ?>" target="_blank"><font
                                size="2" color="#000000"
                                style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Товары для
                                красоты</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/catalog/lvl_136/?reff=<?= $data->reff ?>" target="_blank"><font
                                size="2" color="#000000"
                                style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Товары для
                                здоровья</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/catalog/lvl_106/?reff=<?= $data->reff ?>" target="_blank"><font
                                size="2" color="#000000"
                                style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Навигаторы
                                и автомобильная<br/>электроника</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/catalog/lvl_7/?reff=<?= $data->reff ?>" target="_blank"><font
                                size="2" color="#000000"
                                style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Автоакустика</font></a><br/>
                        <a style="font-size: 12px; color: #000000; text-decoration: underline;font-family:Tahoma;line-height:18px;"
                           href="http://www.mvideo.ru/catalog/lvl_105/?reff=<?= $data->reff ?>" target="_blank"><font
                                size="2" color="#000000"
                                style="font-size: 12px; color: #000000;font-family:Tahoma;line-height:18px;">Игровые
                                приставки и аксессуары</font></a>
                    </font></td>

            </tr>
            </tbody>
        </table>
    </td>
</tr>
<tr>
    <td colspan="2">
        <img src="http://www.mvideo.ru/img/mailer/0.gif" width="600" height="36" alt=""/>
    </td>
</tr>

<? if ($data->footer->banners): ?>

    <? foreach ($data->footer->banners as $banner): ?>
        <tr>
            <td colspan="2">
                <? print_image($banner); ?>
            </td>
        </tr>
    <? endforeach; ?>

    <tr>
        <td colspan="2">
            <img src="http://www.mvideo.ru/img/mailer/0.gif" width="600" height="36" alt=""/>
        </td>
    </tr>
<? endif; ?>

<tr>
    <td colspan="2">
        <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
            <tr>
                <td><font size="2" face="Arial, Helvetica, sans-serif" color="#333333"
                          style="font-size: 13px; font-family: Arial,Helvetica,sans-serif;">Мы здесь:</font></td>
                <td>
                    <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="10" height="7"
                                                     alt="" border="0"/></div>
                </td>
                <td><a href="http://www.facebook.com/MVideo.ru" target="_blank"><img alt="Facebook" width="28"
                                                                                     vspace="0" hspace="0" height="29"
                                                                                     border="0"
                                                                                     style="vertical-align: middle;"
                                                                                     src="http://www.mvideo.ru/img/mailer/soc_fb.gif"
                                                                                     alt=""></a></td>
                <td>
                    <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="10" height="7"
                                                     alt="" border="0"/></div>
                </td>

                <td><a href="http://vk.com/mvideo" target="_blank"><img alt="ВКонтакте" width="29" vspace="0" hspace="0"
                                                                        height="28" border="0"
                                                                        style="vertical-align: middle;"
                                                                        src="http://www.mvideo.ru/img/mailer/soc_vk.gif"
                                                                        alt=""></a></td>
                <td>
                    <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="10" height="7"
                                                     alt="" border="0"/></div>
                </td>
                <td><a href="http://twitter.com/mvideo" target="_blank"><img alt="Twitter" width="28" vspace="0"
                                                                             hspace="0" height="29" border="0"
                                                                             style="vertical-align: middle;"
                                                                             src="http://www.mvideo.ru/img/mailer/soc_tw.gif"
                                                                             alt=""></a></td>
                <td>
                    <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="10" height="7"
                                                     alt="" border="0"/></div>
                </td>
                <td><a href="http://www.youtube.com/mvideoru" target="_blank"><img alt="YouTube" width="28" vspace="0"
                                                                                   hspace="0" height="29" border="0"
                                                                                   style="vertical-align: middle;"
                                                                                   src="http://www.mvideo.ru/img/mailer/soc_yt.gif"
                                                                                   alt=""></a></td>
                <td>
                    <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="10" height="7"
                                                     alt="" border="0"/></div>
                </td>
                <td><a href="http://mvideo-ru.livejournal.com" target="_blank"><img alt="Живой Журнал" width="28"
                                                                                    vspace="0" hspace="0" height="29"
                                                                                    border="0"
                                                                                    style="vertical-align: middle;"
                                                                                    src="http://www.mvideo.ru/img/mailer/soc_lj.gif"
                                                                                    alt=""></a></td>
                <td>
                    <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="10" height="7"
                                                     alt="" border="0"/></div>
                </td>
                <td><a href="http://odnoklassniki.ru/mvideo/" target="_blank"><img alt="Одноклассники.ru" width="28"
                                                                                   vspace="0" hspace="0" height="29"
                                                                                   border="0"
                                                                                   style="vertical-align: middle;"
                                                                                   src="http://www.mvideo.ru/img/mailer/soc_ok.gif"
                                                                                   alt=""></a></td>
                <td>
                    <div style="line-height:0;"><img src="http://www.mvideo.ru/img/mailer/0.gif" width="10" height="7"
                                                     alt="" border="0"/></div>
                </td>
                <td><a href="http://instagram.com/mvideo_ru" target="_blank"><img alt="Instagram" width="28" vspace="0"
                                                                                  hspace="0" height="29" border="0"
                                                                                  style="vertical-align: middle;"
                                                                                  src="http://www.mvideo.ru/img/mailer/soc_ins.gif"
                                                                                  alt=""></a></td>
            </tr>
            </tbody>
        </table>
    </td>
</tr>
<tr>
    <td colspan="2">
        <img src="http://www.mvideo.ru/img/mailer/0.gif" width="600" height="28" alt=""/>
    </td>
</tr>

<? $cabinet_url = $data->region == 'MI' || $data->region == 'NNI' ? 'http://www.mvideo.ru/cabinet/' : 'http://www.mvideo-bonus.ru/personal/login/';  $cabinet_url .= '?reff=' . $data->reff; ?>

<tr>
    <td colspan="2">
        <font size="1" face="Tahoma, sans-serif;" color="#898989"
              style="font-family: Tahoma,Arial; font-size: 11px; color: #898989; text-decoration: none;">

            Акция «<a style="font-size: 11px; color: #ed1c29; text-decoration: underline;" target="_blank"
                      href="http://www.mvideo.ru/sale_stodva/?reff=<?= $data->reff ?>"><font size="1" color="#ed1c29"
                                                                                             style="font-size: 11px; color: #ed1c29;">120
                    часов распродаж</font></a>» проходит с 25 по 29 июля 2013 года включительно во всех обособленных
            подразделениях (магазинах) ООО «М.видео Менеджмент», включая интернет–магазин (покупки, сделанные
            посредством интернет-сайта <a style="font-size: 11px; color: #ed1c29; text-decoration: underline;"
                                          target="_blank" href="http://www.mvideo.ru/?reff=<?= $data->reff ?>"><font
                    size="1" color="#ed1c29" style="font-size: 11px; color: #ed1c29;">mvideo.ru</font></a>), за
            исключением г. Якутск. Пожалуйста, ознакомьтесь с <a
                href="http://www.mvideo.ru/sale_stodva/?reff=<?= $data->reff ?>" target="_blank"
                style="font-size: 11px; color: #ed1c29; text-decoration: underline;"><font size="1" color="#ed1c29"
                                                                                           style="font-size: 11px; color: #ed1c29;">правилами
                    акции</font></a>.<br><br>


            Если Вы не хотите в будущем получать наши новости, пожалуйста,<br/> отмените подписку в <a
                style="font-size: 11px; color: #ed1c29; text-decoration: underline;" target="_blank"
                href="<?=$cabinet_url?>">личном кабинете</a> на сайте <a
                style="font-size: 11px; color: #ed1c29; text-decoration: underline;" target="_blank"
                href="<?=$cabinet_url?>"><font size="1" color="#ed1c29"
                                                                           style="font-size: 11px; color: #ed1c29;">mvideo.ru</font></a><br><br>

            Если Вы получили это письмо от друга и желаете получать новости от &quot;М.Видео&quot;,<br/> пожалуйста, <a
                target="_blank" style="font-size: 11px; color: #ed1c29; text-decoration: underline;"
                href="<?=$cabinet_url?>"><font size="1" color="#ed1c29"
                                                                                style="font-size: 11px; color: #ed1c29;">подпишитесь
                    на рассылку новостей</font></a>. <br><br>

            Чтобы регулярно и без проблем получать рассылку новостей от «М.Видео», пожалуйста,<br/> добавьте адрес <a
                style="font-size: 11px; color: #ed1c29; text-decoration: underline;"
                href="mailto:noreply@sender.mvideo.ru"><font size="1" color="#ed1c29"
                                                             style="font-size: 11px; color: #ed1c29;">noreply@sender.mvideo.ru</font></a>
            в свою адресную книгу.<br><br>


            По всем возникающим вопросам вы можете обратиться по телефону в Москве (495) 777-777-5 (ежедневно с 9 до 21
            часа) и регионах: 8-800-200-777-5 (звонок бесплатный). <br/><br/>


            Также вы можете написать нам по <a style="font-size: 11px; color: #ed1c29; text-decoration: underline;"
                                               target="_blank" href="mailto:noreply@sender.mvideo.ru"><font size="1"
                                                                                                            color="#ed1c29"
                                                                                                            style="font-size: 11px; color: #ed1c29;">адресу
                    24@mvideo.ru</font></a><br/><br/>


            ООО «М.видео Менеджмент», ОГРН 1057746840095. <br/>Юридический адрес: 105066, Россия, Москва, ул. Нижняя
            Красносельская, дом 40/12, корп. 20.
        </font>


    </td>
</tr>
<tr>
    <td colspan="2">
        <img src="http://www.mvideo.ru/img/mailer/0.gif" width="600" height="28" alt=""/>
    </td>
</tr>


</tbody>
</table>
</center>
</td>
</tr></tbody>
</table>
</center>
<!-- Основная таблица конец-->


</body></html>