const ap = new APlayer({
    container: document.getElementById('aplayer'),
	autoplay: true, //自动播放
    listFolded: true,//列表默认折叠
	volume: 0.6,
	fixed: true,
    listMaxHeight: 90,//列表最大高度
   //lrcType: 3, //此为歌词格式，没有歌词可以直接删掉这一行
    audio: [
        {
            name: '如约而至',
            artist: '许嵩',
            url: 'http://qc5y092fc.bkt.clouddn.com/%E5%A6%82%E7%BA%A6%E8%80%8C%E8%87%B3_%E8%AE%B8%E5%B5%A9_128K.mp3',
            cover: 'https://p3fx.kgimg.com/stdmusic/20180612/20180612032745754576.jpg',
            theme: '#ebd0c2'
        },
		{
            name: '最佳歌手',
            artist: '许嵩',
            url: 'http://qc5y092fc.bkt.clouddn.com/%E6%9C%80%E4%BD%B3%E6%AD%8C%E6%89%8B_%E8%AE%B8%E5%B5%A9_128K.mp3',
            cover: 'http://i2.tiimg.com/721551/a32fbf3cd9595eef.jpg',
            theme: '#ebd0c2'
        },
		{
            name: 'DAN DAN心魅かれてく（渐渐被你吸引）',
            artist: 'ZARD',
            url: 'http://qc5y092fc.bkt.clouddn.com/ZARD%20-%20DAN%20DAN%E5%BF%83%E9%AD%85%E3%81%8B%E3%82%8C%E3%81%A6%E3%81%8F%20%28%E6%B8%90%E6%B8%90%E8%A2%AB%E4%BD%A0%E5%90%B8%E5%BC%95%29.mp3',
            cover: 'http://i2.tiimg.com/721551/83b3377ef16499d6.jpg',
            theme: '#ebd0c2'
        },
		{
            name: '负けないで（不要认输）',
            artist: 'ZARD',
            url: 'http://qc5y092fc.bkt.clouddn.com/ZARD%20-%20%E8%B4%9F%E3%81%91%E3%81%AA%E3%81%84%E3%81%A7%20%28%E4%B8%8D%E8%A6%81%E8%AE%A4%E8%BE%93%29.mp3',
            cover: 'http://i2.tiimg.com/721551/83b3377ef16499d6.jpg',
            theme: '#ebd0c2'
        },
		{
            name: 'I Burn (Yellow Trailer)',
            artist: 'Jeff Williams、Casey Lee Williams',
            url: 'http://qc5y092fc.bkt.clouddn.com/Casey%20Lee%20Williams%E3%80%81Jeff%20Williams%20%28%E6%9D%B0%E5%A4%AB%C2%B7%E5%A8%81%E5%BB%89%E5%A7%86%E6%96%AF%29%20-%20I%20Burn%20%28Yellow%20Trailer%29.mp3',
            cover: 'http://i2.tiimg.com/721551/8119ef3654908761.png',
            theme: '#ebd0c2'
        },
	    {
            name: 'Shine',
            artist: 'Jeff Williams、Casey Lee Williams',
            url: 'http://qc5y092fc.bkt.clouddn.com/Jeff%20Williams%20%28%E6%9D%B0%E5%A4%AB%C2%B7%E5%A8%81%E5%BB%89%E5%A7%86%E6%96%AF%29%E3%80%81Casey%20Lee%20Williams%20-%20Shine.mp3',
            cover: 'http://i1.fuimg.com/721551/6374c1d333b87e84.jpg',
            theme: '#ebd0c2'
        },
        {
            name: 'Bmblb',
            artist: 'Jeff Williams、Casey Lee Williams',
            url: 'http://qc5y092fc.bkt.clouddn.com/Jeff%20Williams%20%28%E6%9D%B0%E5%A4%AB%C2%B7%E5%A8%81%E5%BB%89%E5%A7%86%E6%96%AF%29%E3%80%81Casey%20Lee%20Williams%20-%20Bmblb.mp3',
            cover: 'http://i1.fuimg.com/721551/e823f59c04111e6a.png',
            theme: '#46718b'
        },
		{
            name: 'Dream Come true',
            artist: 'Jeff Williams、Casey Lee Williams',
            url: 'http://qc5y092fc.bkt.clouddn.com/Jeff%20Williams%20%28%E6%9D%B0%E5%A4%AB%C2%B7%E5%A8%81%E5%BB%89%E5%A7%86%E6%96%AF%29%E3%80%81Casey%20Lee%20Williams%20-%20Dream%20Come%20True.mp3',
            cover: 'http://i1.fuimg.com/721551/d174ce6069422083.png',
            theme: '#46718b'
        }
    ]
});