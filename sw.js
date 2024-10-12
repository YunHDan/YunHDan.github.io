/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/02/22/PairLIE论文详解/index.html","cfb4701c5d60c36ba8aedece6aec6f87"],["/2024/02/22/test/index.html","165a10a118727a873cb5f1f1747ce860"],["/2024/02/23/注意力机制/index.html","93eec653d0f0b41f4bc1301a125214b0"],["/2024/02/23/注意力机制/屏幕截图 2023-11-24 230449.png","ab1e5d725e7d8c529528828dbd40688e"],["/2024/02/23/注意力机制/屏幕截图 2023-11-24 230637.png","0c2d6039a6c11018e104aab58bd2353f"],["/2024/02/23/注意力机制/屏幕截图 2023-11-24 231509.png","af7b1fea497377095ba358652c633e54"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 200512.png","423efcac79264b22b5e360394bf3222e"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 201534.png","56902fb16ef4567f81d07d0361e4601f"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 202356.png","2e349e4815225bc5483cf4c24673de59"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 203428.png","e484f764a1f0d3288507cf9118df5f55"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 203513.png","6047689d5292cd6391b70361a021ae4d"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 205205.png","a6f623edac5af7df24e14554a80a1deb"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 212459.png","20fe7cc7b66dfe197a1df654c52d4604"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 212801.png","faa21246f14ca9028fac91270e4057fc"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 213911.png","9cfb5d61285da1a0872359153871273d"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 215156.png","3de714d668a2948db84daef4b0f05848"],["/2024/02/23/注意力机制/屏幕截图 2023-11-27 215304.png","b026c626921579863c29a5e57dbba72b"],["/2024/02/23/注意力机制/屏幕截图 2023-11-28 120038.png","65acbeb154344c89ad17ed37b374211a"],["/2024/02/23/注意力机制/屏幕截图 2023-11-28 151246.png","0b0cde352dbf33e8c0939874f6fbe4ee"],["/2024/02/23/注意力机制/屏幕截图 2023-11-28 160635.png","2b81a9d07c6a3a6784aba2e996999140"],["/2024/02/23/注意力机制/屏幕截图 2023-11-28 175302.png","049e65e810ccacb475b166b257e4778a"],["/2024/02/23/注意力机制/屏幕截图 2023-12-08 195010.png","88875a2b86f99a9bb07344750f33771c"],["/2024/02/24/EnlightenGAN论文详解/index.html","a12575cc21483ccb9cb2d7603d7f16be"],["/2024/02/24/Retinexformer论文详解/index.html","012e78be1760be44395d983b497b4554"],["/2024/02/24/Retinexformer论文详解/屏幕截图 2024-02-04 161121.png","a343f36963335ff51a2c1c42b49cf4e8"],["/2024/02/27/中目标战略文件/index.html","014f7bd2c83e03c45cba1b8e21c4cc0d"],["/2024/02/27/公告/20240227.png","2f2380ade48f2d790856ab4e71f354e1"],["/2024/02/27/公告/20240305.png","497a043d17a8a50087477f773131970b"],["/2024/02/27/公告/20240319.png","712c9af5e0729d64f5e8faa78498e9da"],["/2024/02/27/公告/index.html","8494c724318618ce80988ba0e9c10978"],["/2024/03/07/Mamba串烧/0f9d625d583c440da274a4cc03a89671.png","08279f9e29f720ba977674224f167c26"],["/2024/03/07/Mamba串烧/12d4519c5a4a45cca4f3b00b059ec7bb.png","4a83c61967f1ea763b2dd00ce16805c9"],["/2024/03/07/Mamba串烧/1d9dc55c6ff14811a274ee386dee3b9b.png","6a086710467f8bddf08985f4e2ca8db8"],["/2024/03/07/Mamba串烧/2159452e3e7148aab51e4d978bc44a97.png","ee2896f1c2c3e77235cfa838363ee37b"],["/2024/03/07/Mamba串烧/2575220139ef4f90a6f880b33d0dd1d4.png","2061475407df47dd7cafae4e3dd82534"],["/2024/03/07/Mamba串烧/39569d2a2e534effbbaac00f3cde7495.png","e33df62a807f2b694d1163a9b1d3d397"],["/2024/03/07/Mamba串烧/3bc372bc26c341868565adab7563fbda.png","a64faec28cb5d9ed9631ecba60b5cd60"],["/2024/03/07/Mamba串烧/3eb104e1035841f2b4150ac09ce03c27.png","d024d1970fc870b217e07760d4d44578"],["/2024/03/07/Mamba串烧/41a7acc5701b47ab86b96d0f856fcab5.png","764a7ccd3b609572fb63ff9c62de255d"],["/2024/03/07/Mamba串烧/44e0cb2cb0ff403e860204c6df15c69f.png","8a09ab41b722d9aae4ff1d00ff46b2aa"],["/2024/03/07/Mamba串烧/4526626b529f42ccb70b5919779e9ff3.png","74c8de3653daaaf2d7067ca5b0584b3f"],["/2024/03/07/Mamba串烧/488cbf4211754b2d97fb8d384fdb3732.png","024cb9f3703e12a597f290b97da46c43"],["/2024/03/07/Mamba串烧/4acf72cd781f4f148e88b53c1b4ff990.png","37f914e615ac20c7965069dce4fdde05"],["/2024/03/07/Mamba串烧/572c09fc3f6147178af7163c41287af9.png","90a60729d2f366950414ad06d8b73770"],["/2024/03/07/Mamba串烧/5b0c8ec1c046453499ced2e2bafde6a5.png","d944d0bfd6de5ea13aafcc1721d4a456"],["/2024/03/07/Mamba串烧/5bbb4286fd14415e94ede51aa4caf5f8.png","92e6f626176a2404c4ba4ccfaacf6505"],["/2024/03/07/Mamba串烧/61db745199ed43ed985aad17b3d5b5ce.png","b1e6d5a3eb55810a9f5276c8634156e9"],["/2024/03/07/Mamba串烧/623c8eacdcde4039ac5e1c89a807d8ed.png","e25dce401c3243c791b6be6ead5e6ef9"],["/2024/03/07/Mamba串烧/6c0ecd1bc379447cb910a4cc2f7bad8b.png","e5425c56cb52462fbb5add19fb254f86"],["/2024/03/07/Mamba串烧/6d9309b4a9f241089edb08f6df5acec5.png","3d653e3d62f7ceb4a1ccd3679926887c"],["/2024/03/07/Mamba串烧/6fb7fc4aa942446ba27a3005c57a144a.png","46ffccf1bf57533c68bc69eb16f01d5e"],["/2024/03/07/Mamba串烧/703af009f166446d9e7a5bd451bafe70.png","6aeed903d7211449d929e61bae36ff88"],["/2024/03/07/Mamba串烧/70e360256ad14a9fb4f2023e6d64fa91.png","075da6d726a06f18ab375ce515b2c48d"],["/2024/03/07/Mamba串烧/7f0b831f99254a6683c03cf64eb60759.png","ede805389130882c20a0c378361f0b7e"],["/2024/03/07/Mamba串烧/81314632f8134ed3a82f10ca39ddc3e2.png","5bce124e0411382034748911c052633e"],["/2024/03/07/Mamba串烧/86971cbb83d14505a34a992b63753e6f.png","5513a416379959556a39722fbeed0f2e"],["/2024/03/07/Mamba串烧/8878eb69248d4d1c830a60609846eb0d.png","bd45e7084bb406d60297c16b93a8a2c1"],["/2024/03/07/Mamba串烧/8b7a641e4a90413d990826f2542fad3b.png","ae29b814886f2462a18c0bc2947e6d4a"],["/2024/03/07/Mamba串烧/8b89d699c647459e84b2768fb517dbfc.png","51a34412a0df6a98954cbe9a82d1dca9"],["/2024/03/07/Mamba串烧/901700cea9474984823b4b83c6f959db.png","40adb7b341ab143b8c9c8c335eab3541"],["/2024/03/07/Mamba串烧/9421d487c8094867ba5382e75a8c2254.png","80264b5d6c313bf7b77427997624a426"],["/2024/03/07/Mamba串烧/97c0cc93f809480cb60b8fe4aad9c2fa.png","78eb4b1498f314f80dd0c777c1062c86"],["/2024/03/07/Mamba串烧/98c3bea39d5d47f295b5646a44a4449f.png","736a2ebb7aa26df19407cef393e7cb5a"],["/2024/03/07/Mamba串烧/9a82ed6712cc46a39f1e17cad09589cc.png","ccf47c31ee1e2b4b3f18d4fae116b833"],["/2024/03/07/Mamba串烧/9c47d6e186b648e79f22e1e1056e19c3.png","0ebb42f8905419dd80d1db8120d267c1"],["/2024/03/07/Mamba串烧/a14afc54921a49ffbe88d2aab2b0a7e6.png","efdce54da0320f193dc355017a04109d"],["/2024/03/07/Mamba串烧/a9456489beeb4bce9b813eef91ce704a.png","d944d0bfd6de5ea13aafcc1721d4a456"],["/2024/03/07/Mamba串烧/a94ac9c07a37484ba904caabf50aa88a.png","b507dea4c07ea2303e3d3e76d20630a0"],["/2024/03/07/Mamba串烧/aac3331c3cd04b0286d2be468873d6b8.png","cc2ca55eae288b3287de617b4c9d95dd"],["/2024/03/07/Mamba串烧/b9da94c9074f4ea19d769ac667e35236.png","4de76ad5edee378a1328eb5dfe787ac6"],["/2024/03/07/Mamba串烧/c08033ddcdc84549b8627a82bb9c3272.png","025f36e819222ce3b016183aba9d9c83"],["/2024/03/07/Mamba串烧/c2831d5d41df41ff969a093bc92cdaaf.png","22ceed0e3d46f40ac498a7b89cc0831c"],["/2024/03/07/Mamba串烧/c604c15affe145d38c916371a776ca2b.png","d6819f68b8ae272463f084c913070b05"],["/2024/03/07/Mamba串烧/c6316218cd2f46098071c9e4b80801b3.png","10ab151e638cffe92cfe6f04db7c1922"],["/2024/03/07/Mamba串烧/c736fb4bda884483bf470331b4dea8f7.png","b2cfcdfaad9a38ad3214ed03636f8de6"],["/2024/03/07/Mamba串烧/cee443116b6a40958c3d3dd00759ecd4.png","8ce83c3aded1d18f7e7c0fa641a37b34"],["/2024/03/07/Mamba串烧/d3296186fdea4bb3bbb2942917197348.png","2754c83ea55fdb165b156b99821178e7"],["/2024/03/07/Mamba串烧/d34915d21c464dc3bbe9c1a7b76aec83.png","5dd745906aeda4bcefb8aad21a1623c3"],["/2024/03/07/Mamba串烧/db4ed47d5b9745dcae1e0bb2cfbdceb5.png","0daf01bc35eb3afed32e06ab095d9c0d"],["/2024/03/07/Mamba串烧/ef80819b80084f2f87c8a11f5ff12d77.png","7927c33185f8000560254047d75bc4fa"],["/2024/03/07/Mamba串烧/eq (1).png","68d9e695d1d8aec4e7f7722f1d441cfd"],["/2024/03/07/Mamba串烧/eq.png","c15a952812a700e7ef0057484bfa2205"],["/2024/03/07/Mamba串烧/index.html","0e8540ca766e6500ce380605a88fff48"],["/2024/03/07/Mamba串烧/图片1.png","35b4a42ff5e74b7ad3122ccf5e5c846d"],["/2024/03/07/Mamba串烧/屏幕截图 2024-03-10 205738.png","d229b77fc9f3232d924e679228426e0e"],["/2024/03/07/Mamba串烧/屏幕截图 2024-03-24 114627.png","91ce1be7319beeabbd40ef2cde883677"],["/2024/03/12/Linux/index.html","088d97abedd9e89f8b0948b89d2a97df"],["/2024/03/12/Linux/屏幕截图 2024-03-11 203532.png","f127cf4dbbb20ce3e43b8d1977c8684f"],["/2024/03/12/Linux/屏幕截图 2024-03-11 212049.png","f6f67279de1f5a99c5d622bfc8469b99"],["/2024/03/12/Linux/屏幕截图 2024-03-11 235939.png","76791968558b3bf2aba914a45118ab9e"],["/2024/03/12/Linux/屏幕截图 2024-03-12 002402.png","8b3a4ebaf48af8f64125ef373a47796e"],["/2024/03/12/Linux/屏幕截图 2024-03-12 003137.png","f30009a047199e4a4e1b4b5adfd81f25"],["/2024/03/12/Linux/屏幕截图 2024-03-13 200525.png","828fdae502a2a71ad5a92d16e6d84ce6"],["/2024/03/12/Linux/屏幕截图 2024-03-13 200738.png","d2e6058640aa08f1c086cddabb73a5d6"],["/2024/03/12/Linux/屏幕截图 2024-03-13 201111.png","61ffd9ebd4c10cfb09eed7182d05dd74"],["/2024/03/12/Linux/屏幕截图 2024-03-19 165909.png","886b27f7db8764e66bf6e5b7540e4cae"],["/2024/03/12/Linux/屏幕截图 2024-03-19 170036.png","150efc1abfc58e45f347f558a87f5703"],["/2024/03/12/Linux/屏幕截图 2024-03-19 170154.png","483a3187a203d4c305ae4f3eb1177982"],["/2024/03/12/Linux/屏幕截图 2024-03-19 170421.png","a4ecf45db90f665b7c6f6c5ea8d85169"],["/2024/03/12/Linux/屏幕截图 2024-03-19 170510.png","921fd654f8a2b6e49a587fc6ad7a6da3"],["/2024/03/12/Linux/屏幕截图 2024-03-19 170550.png","57f41f4b09eeca2a4fb5ea152c16c09a"],["/2024/03/12/Linux/屏幕截图 2024-03-19 170716.png","f2e5f991120f8bf9a865f76eadbef6a9"],["/2024/03/12/Linux/屏幕截图 2024-03-19 171142.png","ddf50ed5cabc65187050fe863da6b753"],["/2024/03/12/Linux/屏幕截图 2024-03-19 171330.png","9fd142df0651e12e4ccad804cbd59988"],["/2024/03/12/Linux/屏幕截图 2024-03-19 171812.png","0564c3175f971d996fecd1e1484931c9"],["/2024/03/12/Linux/屏幕截图 2024-03-19 172221.png","6b4f75f861004829a01ffc8082557fca"],["/2024/03/12/Linux/屏幕截图 2024-03-19 172258.png","ff168c34c9bac6b71495fe3e18a86567"],["/2024/03/12/Linux/屏幕截图 2024-03-19 172544.png","9eb24c2ae10e1af2d27e970d5313576b"],["/2024/03/12/Linux/屏幕截图 2024-03-19 172639.png","b26c602d6abd6c7bf4bc76f735d7587d"],["/2024/03/12/Linux/屏幕截图 2024-03-19 172753.png","ba135987a832464291adbc353affbb8f"],["/2024/03/12/Linux/屏幕截图 2024-03-19 173041.png","3c69aae114d5ba3fabb6b0010b2d278f"],["/2024/03/12/Linux/屏幕截图 2024-03-19 173056.png","d0b05ab47152b2280c428d1908d2c1ec"],["/2024/03/12/Linux/屏幕截图 2024-03-24 172140.png","518668122b3cd03daba545e8d5f3225e"],["/2024/03/12/Linux/屏幕截图 2024-04-10 201126.png","592b2b5fbce063b94f76e995deb05649"],["/2024/03/12/Linux/屏幕截图 2024-04-10 201644.png","9f578afb554a4dc2802d0161208259cc"],["/2024/06/11/被讨厌的勇气/index.html","ca65d4b0b6b739b6d7dcc4e6ab6afead"],["/2024/07/26/论文精炼/1.png","c465c28a4c3e7f692a21c15fe79f601e"],["/2024/07/26/论文精炼/10.png","350424f7063700628fd1d8748fb33262"],["/2024/07/26/论文精炼/11.png","37eb7a223ea1a03efea2364e9ab1f9d7"],["/2024/07/26/论文精炼/2.png","cb39fdc34130d521a3952487da876e85"],["/2024/07/26/论文精炼/3.png","22999d7c58a9b501fa04a5b1df41f630"],["/2024/07/26/论文精炼/4.png","94255ad7b713f0f20596942bdc71e6b6"],["/2024/07/26/论文精炼/5.png","d12413b75d4cb59ab1b88daf7db3cddd"],["/2024/07/26/论文精炼/6.png","32921b768b2d3efcea38ae93b80532d4"],["/2024/07/26/论文精炼/7.png","579c0c1db7034adb86133a50915d142f"],["/2024/07/26/论文精炼/8.png","b309adcbf7b942dc7951de900236ef2a"],["/2024/07/26/论文精炼/9.png","edd07aa2f11154913367b0036031f35c"],["/2024/07/26/论文精炼/index.html","a46dadc12f5a08b2eeb2d9513645d7d7"],["/2024/07/31/我的番剧/index.html","1b0e5b1a8071bc85b44dbae6575bd5cd"],["/2024/08/01/深度学习调参/index.html","41a1aa8a30419243666971b02c1c3ceb"],["/2024/09/17/table/index.html","2d0e2f1099c331070eb49abb2669548a"],["/2024/09/27/wandb/index.html","0e16b76297eb3140ed1244920b43b3c7"],["/404.html","f62ad0c43c1d6039b3d689ede7152866"],["/archives/2024/02/index.html","c394ccd04d6f1ea9b3f88dfbb3ced7cd"],["/archives/2024/03/index.html","5f350cfd572f0bb49a95e258d7f03749"],["/archives/2024/06/index.html","49f8f98c9f6a0c0c56e0a70f5d74199b"],["/archives/2024/07/index.html","c4839e9d043b7abee86ec95cfa3e36ad"],["/archives/2024/08/index.html","63aaf61b23e267d1eed571570997e272"],["/archives/2024/09/index.html","93e86b92c5517ba6ab6f39b4742551b9"],["/archives/2024/index.html","c8a355214f7b8bf28751ae20a0981a7a"],["/archives/2024/page/2/index.html","783ff14ebf8a10afcd7f3a5dfa9e1ca3"],["/archives/index.html","2d64d648d16570770d7f0f0393e2f32a"],["/archives/page/2/index.html","5fbdd12fbab2ae9b2acd0ad0959a5dd7"],["/categories/乱的/index.html","5d8652c6f99e944a9c2f064d0165a835"],["/categories/导航/index.html","29927af679e8d8143d4bd918d82c9507"],["/categories/番剧/index.html","9662228df4b9801d258f9dfaf62584b8"],["/categories/科研/index.html","00a921718f5a6567a89547c3ded047fc"],["/categories/规划/index.html","83f585843904eee26531d926044570aa"],["/categories/计算机/index.html","de2fe7ae75ed1508629696b4253a16f3"],["/categories/阅读/index.html","3a7f55bf48519ed8e52ef476c90dcbf9"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/arknights.css","5f687e393558bb569f1b0a2f114bec7f"],["/font/Bender.ttf","24948b7a4ff705c7f3555c479dfc2178"],["/font/BenderLight.ttf","9125035bcd9fe317e56c4ad7cd998a05"],["/img/Alipay.png","f57cbd462e623cd6e7c7439475394fe9"],["/img/WeChat.png","95e84026635aa885962057ec100a2daa"],["/img/bg.jpg","37579e219c1ea292fee4b52b21f85dd0"],["/img/bk.jpg","b7b367b22905c1a068ef497d993179f3"],["/img/bk10.jpg","6f745bc5f19dcacd772d385a5c2887e1"],["/img/bk11.jpg","1b9dbe17d993bb1e5e2aa2c943e6564b"],["/img/bk12.jpg","69ce9a789f1e6dd51b2af625b2127cdf"],["/img/bk13.jpg","7e7d3e1adf496ffc4b988ba383386505"],["/img/bk14.jpg","210df2799d08e4cb050496f976720655"],["/img/bk15.jpg","fd56c31d872083842db85006827898af"],["/img/bk16.jpg","019c7936349577cbe0b278d10e37badf"],["/img/bk2.jpg","84e698c966e4bf848e281b65b798545b"],["/img/bk3.jpg","ee17afa3318d1809c494bd4006a9dcdb"],["/img/bk4.jpg","8739089a8f8ab319eb611a29daecc7a6"],["/img/bk5.jpg","48974f8e384afa16a0197fabbf866769"],["/img/bk6.jpg","d04d73aba0a6e7b63d5701c691580a1e"],["/img/bk7.jpg","3a2160b7c08d1ab3bc7e942907831c44"],["/img/bk8.jpg","cce36531ccd70e2d3eea2d55a7a26a01"],["/img/bk9.jpg","92baa2b16c1e1fdf58ea173ceaa9770c"],["/img/faction/1.png","f1f62bc6f65a17acaeee289bbedb3142"],["/img/faction/2.png","a5c3c81f7762a6ad33972802a3e00718"],["/img/faction/3.png","4e9b4aece1273fc4a3c4d39ec11e9f0e"],["/img/faction/4.png","a533837cfdb29451db1ddd831034007a"],["/img/faction/5.png","18b2efa7c7d5d883763240ee4d1e6100"],["/img/pc-bg.jpg","ce6330fd7ed5725c77d8979b1e8834af"],["/index.html","3330994998c601f00dfe1abdc37b48bb"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/js/arknights.js","5b55a2c194655581286bca4fb4bdf5be"],["/js/pjax.js","5887e3e481922f4f0504e471cb2027b5"],["/js/search.js","8ed99a5768d0c27a2f1eca2a559a5f74"],["/lib/encrypt/hbe.js","5ad41f4b0281cda59c07a47931fd9458"],["/lib/encrypt/hbe.style.css","3c4b31eff7e9ede32e57eeac274421ab"],["/lib/fontawesome/css/all.min.css","f151aecf7f6452a0430801d17a825236"],["/lib/fontawesome/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/lib/fontawesome/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/lib/fontawesome/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/lib/fontawesome/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/music/index.html","e9fbf7fc4248fc1d201340f14a34c633"],["/page/2/index.html","d9c98c4dbfb30b28bd9f989779db3f47"],["/sw-register.js","4c4920e264554943e3bdedce9bf2a554"],["/tags/Linux/index.html","f0ecf8a2d9f0d384f0d0b6091e756d20"],["/tags/low-light-image-enhancement/index.html","cf980795cc3e6005caf5e1ccdc476c6f"],["/tags/个人成长/index.html","1aa68e7aec73a5f931e69661ca568216"],["/tags/博主的番剧/index.html","d38dc505d23d8c30c8a93e144e373ca3"],["/tags/实验/index.html","ba11314024f88caeead612c287d61e54"],["/tags/导航/index.html","041b7a7c50355a2b40acdfee36e0241d"],["/tags/杂的/index.html","1649188fd79bd7ddd4819e8aaa9e92e0"],["/tags/深度学习/index.html","234d55de32771a01e067c51ff1a0cbea"],["/tags/深度学习工具/index.html","0ab53e14882ed7ca1f6478c610415843"],["/tags/笔记/index.html","1104f6b1e1bb24c62f82c67579ea5fcf"],["/tags/规划/index.html","27e96a814a3c38412e7b1e6795ca8d62"],["/tags/论文摘要/index.html","95ff1dcb9a836199b5bf72eee4b66fd7"],["/tags/读书笔记/index.html","23f08ca80f5f9b5ccc98f3dd0e69faa6"],["/tags/调参工具/index.html","09f995777c812c4c01b14139e5fb7736"],["/危机合约/index.html","003a4bafc9daf2c95dcf47b62f16c7ef"],["/简历/index.html","2fc594616c53164771ad4ab0e34a1939"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
