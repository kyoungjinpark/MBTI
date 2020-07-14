

                                        /*** 페이스북 ***/
                                        var facebookApiKey = '2285302264897493';
                                        window.fbAsyncInit = function() {
                                         FB.init({
                                             appId     : facebookApiKey,
                                             xfbml     : true,
                                             version : 'v3.3'
                                         });
                                         FB.AppEvents.logPageView();
                                        };
                                        (function(d, s, id){
                                         var js, fjs = d.getElementsByTagName(s)[0];
                                         if (d.getElementById(id)) {return;}
                                         js = d.createElement(s); js.id = id;
                                         js.src = "https://connect.facebook.net/ko_KR/sdk.js";
                                         fjs.parentNode.insertBefore(js, fjs);
                                        }(document, 'script', 'facebook-jssdk'));
                                        /*** 페이스북 ***/


                                        /*** KAKAO ***/
                                        var kakaoApiKey = '078b9aed406085cbd3658c1b84e866cc';
                                        Kakao.init(kakaoApiKey);
                                        /*** KAKAO ***/

                                                                            

                                        /***공유하기*****************************************************************/
                                        var shareUrl = location.origin ;
                                        var shareTitle = " MBTI 부자";
                                        var shareImage = location.origin ;

                                        function fnShareSns(type) {
                                            if(type == 'naver'){
                                                var url = encodeURI(encodeURIComponent(shareUrl));
                                                var title = encodeURI(shareTitle);
                                                var shareNaverUrl = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
                                                popupCommonWinForShare('공유하기', 800, 600, shareNaverUrl);
                                            }else if(type == 'kakao'){
                                                Kakao.Link.sendDefault({
                                                    objectType: 'feed',
                                                    content: {
                                                        title: shareTitle,
                                                        imageUrl: shareImage,
                                                        link: {
                                                            mobileWebUrl: shareUrl,
                                                            webUrl: shareUrl
                                                        },
                                                        description : '내 손안의 모든 레슨 - 레슨몬'
                                                    }
                                                });         
                                            }else if(type == 'facebook'){
                                                var fbURL = 'https://www.facebook.com/dialog/share?app_id='+facebookApiKey+'&display=popup&href='+shareUrl;
                                                popupCommonWinForShare('공유하기', 800, 600, fbURL);
                                            }else if(type == 'copy'){
                                                shareUrl.select;
                                                var successful = document.execCommand('copy'); 
                                                if(successful){
                                                    alert('복사되었습니다');
                                                }else {
                                                    alert('오류');
                                                }

                                            }
                                        }
                                        /***공유하기*****************************************************************/
                                      
                                       