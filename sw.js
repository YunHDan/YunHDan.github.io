/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3e307d978db62d864c17aa4e726ea7e2"],["/about/index.html","9a9f5f2c482c7039cd03c7529d1fdc25"],["/about/learn_me/index.html","d4ba9c68a65ee1376de410148970e96b"],["/about/me/index.html","1a362fad0e29313d2698855a60fccbc3"],["/ai/Deep-Learning-Experiment-Tricks/index.html","a08e488bf35e3feeaeec5e631d410033"],["/ai/cover.jpg","20979db08f701d6c2c2e929797128b38"],["/ai/强化学习/index.html","8c0d795d2510f7dfe36e6931978ed9c4"],["/ai/注意力机制/index.html","55790517329c52b074255e7553bf19ab"],["/ai/深度学习理论/index.html","99affa9a25340cc7d441dce63af96654"],["/ai/现代深度学习/index.html","ec59dd09f04cf28c8fd6ca8d926b6672"],["/archives/2024/02/index.html","30a9ab495d1d0bc76360c002f812ef95"],["/archives/2024/03/index.html","778551a65b70714b8a7811833d5e73e6"],["/archives/2024/06/index.html","dddc494b67242bfc32295ec4d0205d5d"],["/archives/2024/07/index.html","d16934bb1219fd7d163134eb3459a7f2"],["/archives/2024/12/index.html","dc67e85584bae08d59005753a35f90a5"],["/archives/2024/index.html","da23b8c4e4a43d17f07f4a8f7294f06c"],["/archives/2024/page/2/index.html","329413882544e2f64e8925d258b43388"],["/archives/2025/01/index.html","7cbfab4fc6be645ac9bc0a8d5e495d3a"],["/archives/2025/02/index.html","831aa00e4733a3a88a05ac03e2edae17"],["/archives/2025/03/index.html","d51c14256a9264cf8274bcb81e400308"],["/archives/2025/05/index.html","39b8f57425bc0393682a837a6d051954"],["/archives/2025/06/index.html","7f5abf7e5ed79905bb090c72045cdc89"],["/archives/2025/07/index.html","3d06ec170f17457e531213671ecb3451"],["/archives/2025/08/index.html","20d5fa5c0bd7a3eb9df7d879f1660db5"],["/archives/2025/index.html","e34e0bc3837fa6fc5fcb9cb8d78582bb"],["/archives/2025/page/2/index.html","82f093c61c227ed1862858b438a6817b"],["/archives/2025/page/3/index.html","c061fda26d9d0c60f3394734145b4700"],["/archives/2025/page/4/index.html","fcb13c06de99651a839301f46caf71de"],["/archives/index.html","5f4da76f1af09ef2848125d9d5c27e7a"],["/assets/0f9d625d583c440da274a4cc03a89671.png","08279f9e29f720ba977674224f167c26"],["/assets/1.png","c465c28a4c3e7f692a21c15fe79f601e"],["/assets/10.png","350424f7063700628fd1d8748fb33262"],["/assets/11.png","37eb7a223ea1a03efea2364e9ab1f9d7"],["/assets/12d4519c5a4a45cca4f3b00b059ec7bb.png","4a83c61967f1ea763b2dd00ce16805c9"],["/assets/1d9dc55c6ff14811a274ee386dee3b9b.png","6a086710467f8bddf08985f4e2ca8db8"],["/assets/2.png","cb39fdc34130d521a3952487da876e85"],["/assets/2025NtireDenoise.png","33af3ba9a80adb695b73655a8bc769f9"],["/assets/2025NtireDenoise2.png","3668400ad038e98d4a58f169464975a7"],["/assets/2025NtireDenoise3.png","712cce15849486505f4a7ec505b7cbb8"],["/assets/2025NtireDenoise4.png","618a44d4eea1efe8028833a97346ce19"],["/assets/2025NtireDenoise5.png","17ba8234c1cb6abee82eb03b9cbb0e28"],["/assets/2025NtireDenoise6.png","97ead80a038e532b6b860233519e1703"],["/assets/2025NtireDenoise7.png","6a9c0261585398acb7ee555fe6113583"],["/assets/2025NtireDenoise8.png","7a2b9e4552cb9ad264158b501d4a3553"],["/assets/2159452e3e7148aab51e4d978bc44a97.png","ee2896f1c2c3e77235cfa838363ee37b"],["/assets/2575220139ef4f90a6f880b33d0dd1d4.png","2061475407df47dd7cafae4e3dd82534"],["/assets/3.png","22999d7c58a9b501fa04a5b1df41f630"],["/assets/39569d2a2e534effbbaac00f3cde7495.png","e33df62a807f2b694d1163a9b1d3d397"],["/assets/3bc372bc26c341868565adab7563fbda.png","a64faec28cb5d9ed9631ecba60b5cd60"],["/assets/3eb104e1035841f2b4150ac09ce03c27.png","d024d1970fc870b217e07760d4d44578"],["/assets/4.png","94255ad7b713f0f20596942bdc71e6b6"],["/assets/41a7acc5701b47ab86b96d0f856fcab5.png","764a7ccd3b609572fb63ff9c62de255d"],["/assets/44e0cb2cb0ff403e860204c6df15c69f.png","8a09ab41b722d9aae4ff1d00ff46b2aa"],["/assets/4526626b529f42ccb70b5919779e9ff3.png","74c8de3653daaaf2d7067ca5b0584b3f"],["/assets/488cbf4211754b2d97fb8d384fdb3732.png","024cb9f3703e12a597f290b97da46c43"],["/assets/4acf72cd781f4f148e88b53c1b4ff990.png","37f914e615ac20c7965069dce4fdde05"],["/assets/5.png","d12413b75d4cb59ab1b88daf7db3cddd"],["/assets/572c09fc3f6147178af7163c41287af9.png","90a60729d2f366950414ad06d8b73770"],["/assets/5b0c8ec1c046453499ced2e2bafde6a5.png","d944d0bfd6de5ea13aafcc1721d4a456"],["/assets/5bbb4286fd14415e94ede51aa4caf5f8.png","92e6f626176a2404c4ba4ccfaacf6505"],["/assets/6.png","32921b768b2d3efcea38ae93b80532d4"],["/assets/61db745199ed43ed985aad17b3d5b5ce.png","b1e6d5a3eb55810a9f5276c8634156e9"],["/assets/623c8eacdcde4039ac5e1c89a807d8ed.png","e25dce401c3243c791b6be6ead5e6ef9"],["/assets/6c0ecd1bc379447cb910a4cc2f7bad8b.png","e5425c56cb52462fbb5add19fb254f86"],["/assets/6d9309b4a9f241089edb08f6df5acec5.png","3d653e3d62f7ceb4a1ccd3679926887c"],["/assets/6fb7fc4aa942446ba27a3005c57a144a.png","46ffccf1bf57533c68bc69eb16f01d5e"],["/assets/7.png","579c0c1db7034adb86133a50915d142f"],["/assets/703af009f166446d9e7a5bd451bafe70.png","6aeed903d7211449d929e61bae36ff88"],["/assets/70e360256ad14a9fb4f2023e6d64fa91.png","075da6d726a06f18ab375ce515b2c48d"],["/assets/7f0b831f99254a6683c03cf64eb60759.png","ede805389130882c20a0c378361f0b7e"],["/assets/8.png","b309adcbf7b942dc7951de900236ef2a"],["/assets/81314632f8134ed3a82f10ca39ddc3e2.png","5bce124e0411382034748911c052633e"],["/assets/86971cbb83d14505a34a992b63753e6f.png","5513a416379959556a39722fbeed0f2e"],["/assets/8878eb69248d4d1c830a60609846eb0d.png","bd45e7084bb406d60297c16b93a8a2c1"],["/assets/8b7a641e4a90413d990826f2542fad3b.png","ae29b814886f2462a18c0bc2947e6d4a"],["/assets/8b89d699c647459e84b2768fb517dbfc.png","51a34412a0df6a98954cbe9a82d1dca9"],["/assets/9.png","edd07aa2f11154913367b0036031f35c"],["/assets/901700cea9474984823b4b83c6f959db.png","40adb7b341ab143b8c9c8c335eab3541"],["/assets/9421d487c8094867ba5382e75a8c2254.png","80264b5d6c313bf7b77427997624a426"],["/assets/97c0cc93f809480cb60b8fe4aad9c2fa.png","78eb4b1498f314f80dd0c777c1062c86"],["/assets/98c3bea39d5d47f295b5646a44a4449f.png","736a2ebb7aa26df19407cef393e7cb5a"],["/assets/9a82ed6712cc46a39f1e17cad09589cc.png","ccf47c31ee1e2b4b3f18d4fae116b833"],["/assets/9c47d6e186b648e79f22e1e1056e19c3.png","0ebb42f8905419dd80d1db8120d267c1"],["/assets/FA-1.jpg","7e01237011f40271ff84a9002e1c25ec"],["/assets/FA-2.jpg","b1478037a1d2f261aae767454c60e2f2"],["/assets/FA-3.jpg","674cc0a6adc8fca886c5ddda528de3cc"],["/assets/a14afc54921a49ffbe88d2aab2b0a7e6.png","efdce54da0320f193dc355017a04109d"],["/assets/a9456489beeb4bce9b813eef91ce704a.png","d944d0bfd6de5ea13aafcc1721d4a456"],["/assets/a94ac9c07a37484ba904caabf50aa88a.png","b507dea4c07ea2303e3d3e76d20630a0"],["/assets/aac3331c3cd04b0286d2be468873d6b8.png","cc2ca55eae288b3287de617b4c9d95dd"],["/assets/afm1.jpg","41fa246ef1accf03dcc97721fccc0d47"],["/assets/b9da94c9074f4ea19d769ac667e35236.png","4de76ad5edee378a1328eb5dfe787ac6"],["/assets/bindtree1.jpg","82ff1723c10054281d53d40a197c7b61"],["/assets/bindtree2.jpg","33895e9845bd719ef86694d751241a42"],["/assets/c08033ddcdc84549b8627a82bb9c3272.png","025f36e819222ce3b016183aba9d9c83"],["/assets/c2831d5d41df41ff969a093bc92cdaaf.png","22ceed0e3d46f40ac498a7b89cc0831c"],["/assets/c604c15affe145d38c916371a776ca2b.png","d6819f68b8ae272463f084c913070b05"],["/assets/c6316218cd2f46098071c9e4b80801b3.png","10ab151e638cffe92cfe6f04db7c1922"],["/assets/c736fb4bda884483bf470331b4dea8f7.png","b2cfcdfaad9a38ad3214ed03636f8de6"],["/assets/cee443116b6a40958c3d3dd00759ecd4.png","8ce83c3aded1d18f7e7c0fa641a37b34"],["/assets/cidnet1.jpg","38a70b0d532042df931d2c495fc48378"],["/assets/cidnet2.jpg","3d25e1f78d4b7f19965e0b8f5da5a5b6"],["/assets/clip.png","e41965f96cb70ee7cde8290ba7e2fe50"],["/assets/clip2.png","7aa17c1b0209d5f3c75f43d72fe5d34b"],["/assets/clip3.png","be34b991b159485120d9ccd0db37a6fd"],["/assets/clip4.png","e85dd6a1c78b0848b33bbe53af334eb5"],["/assets/clip5.png","f28445caabba25a003ecee8a4e3fb99d"],["/assets/clip6.jpg","263d9abbaf270fe16b3b1ebb388d5a9e"],["/assets/clip7.png","14a8f9d1839afff472fa381dd22b602f"],["/assets/clip8.png","a9f7eeb7c3c16864da29920a162e9cf6"],["/assets/clip9.png","48e323be4284f6f7cd496b58ae7302bf"],["/assets/csec1.jpg","ce21c9375a3930464f5f8c74a04b28cd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/cvprw1.png","566f9e207c221e621515392d3b585fdc"],["/assets/d2l1.png","8fa9abac27aaaece10508e43421d085a"],["/assets/d2l2.png","73bb3cce0463db2b07fc4dcef33ed074"],["/assets/d2l3.png","69e40aece70dfdd10f334a23d1457e42"],["/assets/d2l4.png","a6bca2771521e4a286fbf9b600a2cc41"],["/assets/d2l5.png","dd341d02a35b24495adfc6aab64eb2e6"],["/assets/d2l6.png","e9276cc7ea6675688ee07dfc20b9d2de"],["/assets/d2l7.png","51a38262bf5a5b2762c82843c229c4e3"],["/assets/d3296186fdea4bb3bbb2942917197348.png","2754c83ea55fdb165b156b99821178e7"],["/assets/d34915d21c464dc3bbe9c1a7b76aec83.png","5dd745906aeda4bcefb8aad21a1623c3"],["/assets/db4ed47d5b9745dcae1e0bb2cfbdceb5.png","0daf01bc35eb3afed32e06ab095d9c0d"],["/assets/ef80819b80084f2f87c8a11f5ff12d77.png","7927c33185f8000560254047d75bc4fa"],["/assets/enlightengan.png","906d3ed1ef8e5de5cb278a7791b3fdd5"],["/assets/eq (1).png","68d9e695d1d8aec4e7f7722f1d441cfd"],["/assets/eq.png","c15a952812a700e7ef0057484bfa2205"],["/assets/first.png","8e8c31b2682d16a5441dc0eaeeb9af68"],["/assets/glip1.jpg","ea1a07e755cd31da3aa62c0b63d6f04f"],["/assets/groupvit1.jpg","c0f124d8d1a826c74543bc9571eb4795"],["/assets/groupvit2.jpg","3d104da4374c80254fc9bedaffa36a53"],["/assets/hdsd1.png","749a76cc446f42628b1b74e154c38933"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/assets/lmar1.jpg","a2ec17a19831b7e42fbe4a311d3d7078"],["/assets/lorair1.jpg","09b2aabcffa2400da354743d101aefcf"],["/assets/lseg1.jpg","3c660d4bdac46dce00afb7639f86e87f"],["/assets/me.jpg","5e6ce54deaf5fd997cb25fb734481969"],["/assets/mlwnet.png","5ae995668a85f4c4841685db0e63f39c"],["/assets/mlwnet2.png","f53f24f1056a9a848f647e1ca11e9bd1"],["/assets/my_wife.png","b2ff206085376d1ed72191c332889e74"],["/assets/post.jpg","010d4b93cd2f1a63bdfbb1fab924cda3"],["/assets/reinforce.jpg","35f3aa6249c051f74ae8babf6e162e2a"],["/assets/reinforce2.jpg","c58e0aaac7595df969fb2e0a2474363d"],["/assets/reinforce3.jpg","c3eda940e406ae397480346ddbdfc8d1"],["/assets/reinforce4.jpg","c5f8d32e40ab1a5bf62f4bf58c448348"],["/assets/rl_env1.png","a65c6b9310aa8d990ec4c6233a6c4a8c"],["/assets/sjtu.jpg","d30bfa7bf2819d03bc719bb34d206639"],["/assets/star1.jpg","6c6bb8a40a00b04adc1ea425e60c73d3"],["/assets/uasdn.png","ddc89936eeecd1c8a146c85118956e19"],["/assets/uasdn2.png","94b26f19f6df4ccf48d137461d725635"],["/assets/wadawdawd.png","947bd24b440ca4defee69b3799ff1402"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/assets/zero-ig.png","9e412500f597ca7c4f3ab04b3b8f8278"],["/assets/zs-n2n1.jpg","d16f7bbdbe51525399ef645e60c31172"],["/assets/图片1.png","35b4a42ff5e74b7ad3122ccf5e5c846d"],["/assets/学校排名.jpg","87761b100181c56963b19952fdf0ae99"],["/assets/屏幕截图 2024-03-11 203532.png","f127cf4dbbb20ce3e43b8d1977c8684f"],["/assets/屏幕截图 2024-03-11 212049.png","f6f67279de1f5a99c5d622bfc8469b99"],["/assets/屏幕截图 2024-03-11 235939.png","76791968558b3bf2aba914a45118ab9e"],["/assets/屏幕截图 2024-03-12 002402.png","8b3a4ebaf48af8f64125ef373a47796e"],["/assets/屏幕截图 2024-03-12 003137.png","f30009a047199e4a4e1b4b5adfd81f25"],["/assets/屏幕截图 2024-03-13 200525.png","828fdae502a2a71ad5a92d16e6d84ce6"],["/assets/屏幕截图 2024-03-13 200738.png","d2e6058640aa08f1c086cddabb73a5d6"],["/assets/屏幕截图 2024-03-13 201111.png","61ffd9ebd4c10cfb09eed7182d05dd74"],["/assets/屏幕截图 2024-03-19 165909.png","886b27f7db8764e66bf6e5b7540e4cae"],["/assets/屏幕截图 2024-03-19 170036.png","150efc1abfc58e45f347f558a87f5703"],["/assets/屏幕截图 2024-03-19 170154.png","483a3187a203d4c305ae4f3eb1177982"],["/assets/屏幕截图 2024-03-19 170421.png","a4ecf45db90f665b7c6f6c5ea8d85169"],["/assets/屏幕截图 2024-03-19 170510.png","921fd654f8a2b6e49a587fc6ad7a6da3"],["/assets/屏幕截图 2024-03-19 170550.png","57f41f4b09eeca2a4fb5ea152c16c09a"],["/assets/屏幕截图 2024-03-19 170716.png","f2e5f991120f8bf9a865f76eadbef6a9"],["/assets/屏幕截图 2024-03-19 171142.png","ddf50ed5cabc65187050fe863da6b753"],["/assets/屏幕截图 2024-03-19 171330.png","9fd142df0651e12e4ccad804cbd59988"],["/assets/屏幕截图 2024-03-19 171812.png","0564c3175f971d996fecd1e1484931c9"],["/assets/屏幕截图 2024-03-19 172221.png","6b4f75f861004829a01ffc8082557fca"],["/assets/屏幕截图 2024-03-19 172258.png","ff168c34c9bac6b71495fe3e18a86567"],["/assets/屏幕截图 2024-03-19 172544.png","9eb24c2ae10e1af2d27e970d5313576b"],["/assets/屏幕截图 2024-03-19 172639.png","b26c602d6abd6c7bf4bc76f735d7587d"],["/assets/屏幕截图 2024-03-19 172753.png","ba135987a832464291adbc353affbb8f"],["/assets/屏幕截图 2024-03-19 173041.png","3c69aae114d5ba3fabb6b0010b2d278f"],["/assets/屏幕截图 2024-03-19 173056.png","d0b05ab47152b2280c428d1908d2c1ec"],["/assets/屏幕截图 2024-03-24 172140.png","518668122b3cd03daba545e8d5f3225e"],["/assets/屏幕截图 2024-04-10 201126.png","592b2b5fbce063b94f76e995deb05649"],["/assets/屏幕截图-2023-11-24-230449.png","ab1e5d725e7d8c529528828dbd40688e"],["/assets/屏幕截图-2023-11-24-230637.png","0c2d6039a6c11018e104aab58bd2353f"],["/assets/屏幕截图-2023-11-24-231509.png","af7b1fea497377095ba358652c633e54"],["/assets/屏幕截图-2023-11-27-200512.png","423efcac79264b22b5e360394bf3222e"],["/assets/屏幕截图-2023-11-27-201534.png","56902fb16ef4567f81d07d0361e4601f"],["/assets/屏幕截图-2023-11-27-213911.png","9cfb5d61285da1a0872359153871273d"],["/assets/屏幕截图-2023-11-27-215304.png","b026c626921579863c29a5e57dbba72b"],["/assets/屏幕截图-2023-11-28-151246.png","0b0cde352dbf33e8c0939874f6fbe4ee"],["/assets/屏幕截图-2023-11-28-160635.png","2b81a9d07c6a3a6784aba2e996999140"],["/assets/屏幕截图-2023-11-28-175302.png","049e65e810ccacb475b166b257e4778a"],["/assets/屏幕截图-2023-12-08-195010.png","88875a2b86f99a9bb07344750f33771c"],["/assets/屏幕截图-2024-02-04-161121.png","a343f36963335ff51a2c1c42b49cf4e8"],["/assets/屏幕截图-2024-03-10-205738.png","d229b77fc9f3232d924e679228426e0e"],["/assets/屏幕截图-2024-03-24-114627.png","91ce1be7319beeabbd40ef2cde883677"],["/assets/屏幕截图-2024-04-10-201644.png","9f578afb554a4dc2802d0161208259cc"],["/baoyan/Embodied-3D-Labs/index.html","1a4ffefdebcb48fe7abb2fc58af4d0f6"],["/baoyan/Low-level-Vision-Group/index.html","177700916b62c729eec6b79037834170"],["/baoyan/cover.jpg","c9df5220cf098422a66f8cefa047fd3b"],["/baoyan/保研信息汇总/index.html","ceaff17f8d8d90770c96e768b1f45ba8"],["/baoyan/保研历程/index.html","346bc4fbb3044b8f8f1ed08a09dbe4a5"],["/book/cover.jpg","a43860e443edf706d83ce51a20c6ce8d"],["/book/《认知觉醒》/index.html","8362d2a134b6147a75001d6b15fff6e3"],["/book/被讨厌的勇气/index.html","97506f3fbdc5dacb89639078225d83bf"],["/categories/ai/index.html","16c1caaea20d3bfbbd2bfe9fc40d47ee"],["/categories/baoyan/index.html","0219f974862e8c5c0467097c8c32c25c"],["/categories/book/index.html","23c58c5075722e2b2050bc54a64f45ec"],["/categories/cs/index.html","fadad1801c3e9ca9ecb1f92e23e34c57"],["/categories/cs/page/2/index.html","acdad218373452714f480c3cffd3b7c6"],["/categories/index.html","fc2011c324bd3ad40cde27b786c8e3fc"],["/categories/other/index.html","3f5ead6d6e2fd8ec4034a6e92893ebf5"],["/categories/project/index.html","245d2a5d0ae3227d7724ede62d6bfc38"],["/categories/research/index.html","70435510bc44569d238fd2fe41774e30"],["/cs/ACM算法题单/index.html","c0573ad5e3829240ac80d1b2a2cfe160"],["/cs/Conda、Pip、Cuda/index.html","ab918973445a24aaba2826df78e8268f"],["/cs/Flask/index.html","e7c39046568309a585dca87384116a40"],["/cs/Javascript知识树/index.html","b28294f01b8dc05edf5885cbab94fae8"],["/cs/Linux/index.html","6bd40c665a529a821a2201d0371fe867"],["/cs/Pip、Conda、github镜像/index.html","6058b1b042296027f1c0220ddd9010d7"],["/cs/Pytorch/index.html","a18fc8b55390488b44b332ee0f53b797"],["/cs/Springboot、Mybatis/index.html","eb12bf5f6ee22d1f22b369d9300b0792"],["/cs/Vue/index.html","0813cf50fd7f529f2a82bdecb3cb5e19"],["/cs/Web/index.html","0cfc8da84bb6b0d4439521e5e91d76c0"],["/cs/cover.jpg","137f8cd952616851085a146e62076e90"],["/cs/图像处理/index.html","4c4145addcb3aa6a3bd7d93b692e4b27"],["/cs/数据库理论1/index.html","cc68f78383997894babe29a4551af177"],["/cs/数据库理论2/index.html","46e4b8f6c6aa072d04f1387ebd8aeaf5"],["/cs/编译原理理论/index.html","81c6d164fe8598ab019b4fa94fb4f86e"],["/cs/计算机系统组成/index.html","5aa265dfdbeedac80869b6257827bc0b"],["/cs/计算机网络理论/index.html","bb61cf89ad1ec89e4d4fa01d2ed15879"],["/cs/边缘计算/index.html","523c54324ff997f552ebdb6249643041"],["/css/app.css","2a9a5797f22c69c95baf58b05daf1d26"],["/css/comment.css","6d04a796a16f69ff68a00767701c896a"],["/css/mermaid.css","b58d448a82cd87a940261968952b8615"],["/friends/index.html","336b8f58795b00a42abadc85f0a404a6"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/logo.svg","e67639a80e9511587a08359bc7740624"],["/images/me.jpg","5e6ce54deaf5fd997cb25fb734481969"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.jpg","38361271e46eb9e22f85963f28e3c376"],["/index.html","601a88ae6c26b3996c8d7af73fa438ed"],["/js/app.js","82fb80de072e287d5de80f8b03acf883"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/other/My 二次元/index.html","39e00cc8014e4f1e1ab3adb6324584ed"],["/other/cover.jpg","d856e4c7b39c845ca70799c377c34b06"],["/other/博客文档美化使用说明/index.html","cb260e96e12c42565ec78bb219003ba3"],["/other/思想建设/index.html","da636254425abf243349ce58952d1548"],["/other/我的科研杂谈/index.html","673fe2f12bbe0cbec2ab13af44fbf65f"],["/other/羽毛球1/index.html","23629e1f33e8fde7b9db5e5c054cf3b7"],["/other/羽毛球2/index.html","d34c2e7c698ab918d4f21f4ba7a10e12"],["/other/谈判技巧/index.html","452221aa93ead09cac89ed0c827b4a53"],["/page/2/index.html","1e01f60d5591ed2b8b29a6c6b6064e34"],["/page/3/index.html","3b94344d3d90c76d223afb8ba2e69c2d"],["/page/4/index.html","f5acab3f997e7c60fd7b3d92be9eaa29"],["/page/5/index.html","b1f6d7c2d47417254962cdec02d0353d"],["/project/GAN生成手写数字实践/index.html","30956035b1e27e63ed5b5c96ad12af93"],["/project/cover.jpg","f0f5ee5a69e92af808c77638ce80b36d"],["/project/基于CLIP的图像物体辨别/index.html","dc2bb50a11e2c5b5b7b42fdfc8a8329e"],["/project/强化学习小实践——构建Env的基本方法/index.html","94ccb73f13c4867c0ba9756ef8ea6841"],["/project/正则表达式转换为自动机/index.html","05054b7bc3d2fa86efc3892364648ed2"],["/research/2025 CVPR NTIRE Image Denoise报告研究思考/index.html","4eb8706ded11dd6138fc1a0c95bea56f"],["/research/EnlightenGAN论文详解/index.html","a4837047e86501b91eeb2d81f2b9b266"],["/research/Low Level Vision论文精炼/index.html","6f2daa2b386b234cfa69d1d208f9f4ad"],["/research/Mamba串烧/index.html","0da1a006a4e7b6d427794fa478178dfe"],["/research/PairLIE论文详解/index.html","1c01503c6d55896add6200974eafb1aa"],["/research/Retinexformer论文详解/index.html","9b0afa5eda6bf51d6cd384382c2d4f57"],["/research/cover.jpg","f4bb67c587314e6b6c385da7f80c3229"],["/research/具身智能基础技术/index.html","c384e8b6b1aae4947ee51f40dcd04690"],["/research/多模态论文精炼/index.html","61b5051e80f76087cfe4ed68532cc0c7"],["/research/期刊、会议投稿经验/index.html","3c2929de65d336b4d34afd66933df2d7"],["/sw-register.js","11360f3ce03cabf77f668ddd66a68a07"],["/tags/index.html","c4bc2312b11a527293880b200441cbd1"],["/公告/index.html","a69b74d59db9d8cda5a766407c4c1b99"]];
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
