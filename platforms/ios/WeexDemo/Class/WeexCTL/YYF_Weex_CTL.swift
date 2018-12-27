//
//  YYF_Weex_CTL.swift
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/19.
//  Copyright © 2018 taobao. All rights reserved.
//

let KNotif_Name_RefreshInstance = NSNotification.Name.init("RefreshInstance")
let InfoDictionaryKey = "WXSocketConnectionURL"

import UIKit

@objc class YYF_Weex_CTL: UIViewController ,SRWebSocketDelegate{

    @objc var url : URL?
    var hotReloadSocket : SRWebSocket?
    var instance : WXSDKInstance!
    var weexView: UIView?
    
    override func viewDidLoad() {
        super.viewDidLoad()

//        self.setupNaviBar()
        let refreshBtnItem = UIBarButtonItem.init(title: "reload", style: .plain, target: self, action: #selector(reload))
        self.navigationItem.rightBarButtonItem = refreshBtnItem
        self.navigationController?.navigationBar.backgroundColor = UIColor.clear
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
    
        if self.hotReloadSocket == nil {
            let hotReloadURL = Bundle.main.object(forInfoDictionaryKey: InfoDictionaryKey ) as! String
            
            self.hotReloadSocket = SRWebSocket.init(url: URL.init(string: hotReloadURL)!)
            self.hotReloadSocket?.delegate = self
            self.hotReloadSocket?.open()
            self.render()
            
        }
        
        NotificationCenter.default.addObserver(self, selector: #selector(notificationRefreshInstance(notif:)), name: KNotif_Name_RefreshInstance, object: nil)
    }
    
    @objc func reload() {
        if self.url != nil{
            self.render()
        }else{
            let alert = LEEAlert.alert()
            let _ = alert.config.leeTitle("提示").leeContent("url错误").leeCancelAction("确定",nil).leeShow()
        }
    }
    
    func render() {
        instance = WXSDKInstance()
        instance.viewController = self
        instance.frame = self.view.frame
        
        instance.onCreate = { [weak self] (view) in
            debugPrint("onCreate")
            /*
             1.移除之前渲染的视图
             2.添加回调参数的视图对象到视图控制器的根视图上
             */
            self!.weexView?.removeFromSuperview()
            self!.weexView = view
            self!.view.addSubview(self!.weexView!)
        }
        instance.onFailed = { (error) in
            debugPrint("onFailed : " + error!.localizedDescription)
        }
        instance.renderFinish = { (view) in
            debugPrint("renderFinish")
        }
        instance.render(with: self.url!)
    }
    
    
    @available(iOS 11.0, *)
    override func viewSafeAreaInsetsDidChange() {
        instance.frame = self.view.frame
    }


    //MARK: - SRWebSocketDelegate
    func webSocketDidOpen(_ webSocket: SRWebSocket!) {
        print("webSocketDidOpen")
    }
    func webSocket(_ webSocket: SRWebSocket!, didReceiveMessage message: Any!) {
        print("didReceiveMessage")
    }
    func webSocket(_ webSocket: SRWebSocket!, didFailWithError error: Error!) {
        print("didReceiveMessage error = " + error.localizedDescription)
    }
    func webSocket(_ webSocket: SRWebSocket!, didReceivePong pongPayload: Data!) {
        print("didReceivePong")
    }
    func webSocket(_ webSocket: SRWebSocket!, didCloseWithCode code: Int, reason: String!, wasClean: Bool) {
        print("didCloseWithCode reason = " + reason)
    }
    
    @objc func notificationRefreshInstance(notif:Notification) {
        self.render()
    }
    
    deinit {
        instance.destroy()
        self.hotReloadSocket?.close()
        NotificationCenter.default.removeObserver(self, name: KNotif_Name_RefreshInstance, object: nil)
    }

}
