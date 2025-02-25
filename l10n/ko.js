OC.L10N.register(
    "suspicious_login",
    {
    "A new login into your account was detected. The IP address %s was classified as suspicious. If this was you, you can ignore this message. Otherwise you should change your password." : "계정에 새 로그인이 탐지되었습니다. IP 주소 %s이(가) 수상한 것으로 분류되었습니다. 직접 로그인했다면 이 메시지를 무시해도 됩니다. 그렇지 않다면 암호를 변경하십시오.",
    "Suspicious Login" : "수상한 로그인",
    "New login detected" : "새로운 로그인 탐지됨",
    "Detect and warn about suspicious IPs logging into Nextcloud\n\t" : "수상한 IP가 Nextcloud에 로그인하는 것을 탐지하고 경고\n\t",
    "Suspicious login detection" : "수상한 로그인 탐지",
    "The suspicious login app is enabled on this instance. It will keep track of IP addresses users successfully log in from and build a classifier that warns if a new login comes from a suspicious IP address." : "이 인스턴스에 수상한 로그인 앱이 활성화되어 있습니다. 사용자가 성공적으로 로그인한 IP 주소를 추적하고 수상한 IP 주소에서 새로 로그인했을 때 알리는 분류기를 생성합니다.",
    "Training data statistics" : "훈련 데이터 통계",
    "So far the app has captured {total} logins (including client connections), of which {distinct} are distinct (IP, UID) tuples." : "지금까지 앱에서 로그인 시도(클라이언트 연결 포함) {total}회를 탐지하였으며, {distinct}개의 고유한 (IP, UID) 순서쌍이 포함되어 있습니다.",
    "Classifier model statistics" : "분류기 모델 통계",
    "No classifier model has been trained yet. This most likely means that you just enabled the app recently. Because the training of a model requires good data, the app waits until logins of at least {days} days have been captured." : "분류기 모델이 훈련되지 않았습니다. 앱을 활성화한 지 얼마 지나지 않았을 수도 있습니다. 모델을 훈련하려면 좋은 데이터가 필요하기 때문에 앱에서 최소 {days}일간 로그인 정보를 탐지합니다.",
    "During evaluation, the latest model (trained {time}) has shown to capture {recall}% of all suspicious logins (recall), whereas {precision}% of the logins classified as suspicious are indeed suspicious (precision). Below you see a visualization of historic model performance." : "평가 기간 동안 최신 모델({time}에 훈련됨)에서 모든 수상한 로그인 중 {recall}%를 탐지했으며, 수상한 것으로 판단된 로그인 중 {precision}%가 실제로 수상한 로그인이었습니다. 아래에서 모델 성능 기록을 볼 수 있습니다.",
    "Precision" : "정밀도",
    "Recall" : "소환"
},
"nplurals=1; plural=0;");
