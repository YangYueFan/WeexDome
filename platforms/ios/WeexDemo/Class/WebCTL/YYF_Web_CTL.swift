//
//  YYF_Web_CTLViewController.swift
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/25.
//  Copyright © 2018 taobao. All rights reserved.
//

import UIKit

@objc class YYF_Web_CTL: UIViewController ,UIWebViewDelegate{

    @IBOutlet weak var myWebView: UIWebView!
    @objc var url = "" 
    
    override func viewDidLoad() {
        super.viewDidLoad()

        
    }
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        if self.url != "" {
            self.loadURL()
        }else{
            let alert = LEEAlert.alert()
            let _ = alert.config.leeTitle("url 有误").leeCancelAction("确定",nil).leeShow()
        }
    }
    
    func loadURL() {
        self.myWebView.loadRequest(URLRequest.init(url: URL.init(string: self.url)!))
    }
    
    func webViewDidStartLoad(_ webView: UIWebView) {
        
    }
    func webViewDidFinishLoad(_ webView: UIWebView) {
        
    }
    func webView(_ webView: UIWebView, didFailLoadWithError error: Error) {
        YYFLog(error.localizedDescription)
    }
    func webView(_ webView: UIWebView, shouldStartLoadWith request: URLRequest, navigationType: UIWebView.NavigationType) -> Bool {
        return true
    }

}
