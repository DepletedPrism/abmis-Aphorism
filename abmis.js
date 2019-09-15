var len = 35;
var rnd = Math.floor(Math.random() * len);
var abmis = new Array(len);

abmis[0] = "简单得很！";
abmis[1] = "菜呀。";
abmis[2] = "大水题！";
abmis[3] = "咕咕咕..";
abmis[4] = "别呀，学点有意思的呀";
abmis[5] = "这（zhei）题我一眼秒了。";
abmis[6] = "这题一眼题啊。";
abmis[7] = "众所周知，任意模数 NTT 是 NOIP Day1 T2 难度。";
abmis[8] = "NOIP 一等奖不是随便拿吗？";
abmis[9] = "这题不随便做";
abmis[10] = "cin 多好啊";
abmis[11] = "谁有摸究哇（Manjaro）镜像啊？";
abmis[12] = "太强了！";
abmis[13] = "你这是什么题啊？";
abmis[14] = "NOIP 一等奖太水了。";
abmis[15] = "莫比乌斯反演肝一周就肝出来了";
abmis[16] = "（莫比乌斯反演）这东西太简单了，不用讲。";
abmis[17] = "请.";
abmis[18] = "请！";
abmis[19] = "请！！";
abmis[20] = "Splay 太烂了。";
abmis[21] = "我不知道！";
abmis[22] = "不要传播邪教，装摸究哇（Manjaro）啊！";
abmis[23] = "你怎么也，说得真好。";
abmis[24] = "锤子！";
abmis[25] = "你怎么那么毒啊！";
abmis[26] = "嗯？嗯嗯嗯！！？";
abmis[27] = "别急，先让我搓把 CR。";
abmis[28] = "后缀自动机难吗？？！";
abmis[29] = "在？";
abmis[30] = "斯~~";
abmis[31] = "字符串还要学么？";
abmis[32] = "去你丫的";
abmis[33] = "淦";
abmis[34] = "5 min 手打 Splay 不是 OIer 的基本素养吗?";

$.get('https://sslapi.hitokoto.cn/?c=a', function (data) {
  if (typeof data === 'string')
    data = JSON.parse(data);
  $('#hitokoto-loader').removeClass('active');
  $('#hitokoto-content').css('display', '').text(abmis[rnd]);
  $('#hitokoto-from').css('display', '').text('——' + 'abmis');
}); 
