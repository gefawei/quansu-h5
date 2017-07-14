/**
 * Created by qs on 2016/5/30.
 */
var bgAudio = new Audio();
bgAudio.loadStatus = 'unload';
bgAudio.loop = true;
function loadAudio(audio, url, callback) {
    audio.src = url;
    audio.load();
    audio.addEventListener('canplay', function () {
        bgAudio.loadStatus = 'loaded';
        callback();
    });
    audio.addEventListener('loadstart', function () {
        bgAudio.loadStatus = 'loading';
    });
}
function playAudio(){
    if (bgAudio.loadStatus === 'unload') {
        loadAudio(bgAudio, 'media/bg.mp3', function () {
            playAudio();
        });
        return 1;
    }

    bgAudio.play();
}
function stopAudio() {
    bgAudio.pause();
}
bgAudio.addEventListener('playing' ,function (e) {
    $('#music .music-btn').addClass('play');
});
bgAudio.addEventListener('pause' ,function (e) {
    $('#music .music-btn').removeClass('play');
});



    $('#music').on('touchstart', function (e) {
        if (bgAudio.paused) {
            playAudio();
            return 0;
        }
        stopAudio();
        return 1;
    });


window.onload=function(){
    if (bgAudio.loadStatus !== 'unload') {return;}
    playAudio();
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
        lazyLoadingInPrevNextAmount : 2,
        onInit: function(swiper){ //Swiper2.x�ĳ�ʼ����onFirstInit
            swiperAnimateCache(swiper); //���ض���Ԫ��
            swiperAnimate(swiper); //��ʼ����ɿ�ʼ����
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //ÿ��slide�л�����ʱҲ���е�ǰslide����
        }
    });
    $('#page3').click(function(){
        swiper .slideNext();
    });
    $('.start').click(function(){
        swiper.slidePrev();
    });

};
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
//�ƶ��˵������һ�㶼֧��window.orientation���������ͨ��������������жϳ��ֻ��Ǵ��ں�����������״̬��
//window.onorientationchange(for iphone),window.onresize(for android)
function hengshuping() {
    if (window.orientation == 90 || window.orientation == -90) {//����90��ʾ���������������ң�
        $('.mengceng').css('display','block');
        stopAudio();

    } else {
        $('.mengceng').css('display','none');
        playAudio(); }
}

