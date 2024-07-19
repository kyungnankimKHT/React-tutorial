const SocialKakao = ()=>
    {
        const Rest_api_key='5f86632f1a8a7222b5f4dad3e2ace649' //REST API KEY
        const redirect_uri = 'http://localhost:3000/auth' //Redirect URI
        // oauth 요청 URL
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
        const handleLogin = ()=>{
            window.location.href = kakaoURL
        }
        return(
        <>
        <button onClick={handleLogin}>카카오 로그인</button>
        </>
        )
    }
    export default SocialKakao
    출처: https://stack94.tistory.com/entry/React-카카오Kakao-로그인-구현해보기 [느린 개발자:티스토리]