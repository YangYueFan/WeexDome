//
//  KNetworkTool.swift
//  SG_Student_Swift
//
//  Created by KEN on 2017/10/24.
//  Copyright © 2017年 Ken. All rights reserved.
//

import UIKit
import Alamofire
import SwiftyJSON



enum MethodType {
    case get
    case post
}

class KNetworkTool: NSObject {
    
    // MARK: - 网络监听
   static let manager = NetworkReachabilityManager.init()
   static var isFirstShowZAlert = true
    // MARK: - 直接返回JSON数据
    class func requestJSONData(_ type : MethodType, URLString : String, parameters : [String : Any]? = nil, isHud:Bool, finishedCallback :  @escaping (_ result : JSON) -> ()) {
        
        if KNetworkTool.manager!.networkReachabilityStatus == .notReachable {
            SVProgressHUD.showError(timeInterval: 1.5, str: "网络异常")
            return;
        }
        
        // 1.获取类型
        let method = type == .get ? HTTPMethod.get : HTTPMethod.post
        
        KNetworkTool.statusLineNetworkflower(true)
        // 2.发送网络请求
        
        if isHud {
            DispatchQueue.main.async {
                SVProgressHUD.show(withStatus: "加载中..")
                SVProgressHUD.setDefaultMaskType(.black)
            }
        }
        let manager = Alamofire.SessionManager.default
        manager.session.configuration.timeoutIntervalForRequest = 10
        manager.request(URLString, method: method, parameters: parameters).responseJSON { (response) in
            KNetworkTool.statusLineNetworkflower(false)
            
            if isHud{
                DispatchQueue.main.async {
                    SVProgressHUD.dismiss()
                }
            }
            
            // 3.获取结果
            guard let result = response.result.value else {
                YYFLog(URLString + "  \(response.result.error!.localizedDescription)" )
                
                SVProgressHUD.showError(timeInterval: 1.5, str: response.result.error!.localizedDescription)
                return
            }
            
            // 4.将结果回调出去
            finishedCallback(JSON(result))
        }
    }
    
    // MARK: - XML转JSON
//    class func requestXMLToJsonData(_ type : MethodType, URLString : String, parameters : [String : Any]? = nil, isHud:Bool, finishedCallback :  @escaping (_ result : Any) -> ()) {
//        if KNetworkTool.manager!.networkReachabilityStatus != .reachable(.ethernetOrWiFi) &&
//            KNetworkTool.manager?.networkReachabilityStatus != .reachable(.wwan){
//            SVProgressHUD.showError(timeInterval: 1.5, str: "当前没有网络")
//            return;
//        }
//        // 1.获取类型
//        let method = type == .get ? HTTPMethod.get : HTTPMethod.post
//        
//        KNetworkTool.statusLineNetworkflower(true)
//        if isHud {
//            DispatchQueue.main.async {
//                SVProgressHUD.show(withStatus: "加载中")
//                SVProgressHUD.setDefaultMaskType(.black)
//            }
//        }
//        // 2.发送网络请求
//        let manager = Alamofire.SessionManager.default
//        manager.session.configuration.timeoutIntervalForRequest = 10
//        manager.request(URLString, method: method, parameters: parameters).responseString { (responseStr) in
//            KNetworkTool.statusLineNetworkflower(false)
//            if isHud{
//                DispatchQueue.main.async {
//                    SVProgressHUD.dismiss()
//                }
//            }
//            // 3.获取结果
//            guard responseStr.result.value != nil else {
//                KLog(URLString + "  \(responseStr.result.error!)" )
//                SVProgressHUD.showError(timeInterval: 1.5, str: "数据加载错误")
//                return
//            }
//            
//            let xmlDic = XMLReader.dictionary(forXMLString: responseStr.result.value, error: nil)
//            
//            if xmlDic != nil {
//                let json = JSON(xmlDic!)
//                
//                let jsonData = json["string"]["text"].stringValue
//                let strData = jsonData.data(using: String.Encoding.utf8)
//                let dic = try? JSONSerialization.jsonObject(with: strData!, options: .mutableContainers) 
//                if dic != nil{
//                    // 4.将结果回调出去
//                    finishedCallback(dic!)
//                }else{
//                    finishedCallback(jsonData)
//                }
//                
//            }else{
//                KLog(URLString + "result.value:  \(responseStr.result.value!)" )
//            }
//            return
//            
//        }
//        
//    }
    
    // MARK: - String
    class func requestStringData(_ type : MethodType, URLString : String, parameters : [String : Any]? = nil, isHud:Bool, finishedCallback :  @escaping (_ result : Any) -> ()) {
        
        if KNetworkTool.manager!.networkReachabilityStatus == .notReachable {
            SVProgressHUD.showError(timeInterval: 1.5, str: "网络异常")
            return;
        }
        
        KNetworkTool.statusLineNetworkflower(true)
        if isHud {
            DispatchQueue.main.async {
                SVProgressHUD.show(withStatus: "加载中..")
                SVProgressHUD.setDefaultMaskType(.black)
            }
        }
        // 1.获取类型
        let method = type == .get ? HTTPMethod.get : HTTPMethod.post
        
        // 2.发送网络请求
        let manager = Alamofire.SessionManager.default
        manager.session.configuration.timeoutIntervalForRequest = 10
        manager.request(URLString, method: method, parameters: parameters).responseString { (responseStr) in
            KNetworkTool.statusLineNetworkflower(false)
            if isHud{
                DispatchQueue.main.async {
                    SVProgressHUD.dismiss()
                }
            }
            // 3.获取结果
            guard let result = responseStr.result.value else {
                YYFLog(URLString + "  \(responseStr.result.error!.localizedDescription)" )
                SVProgressHUD.showError(timeInterval: 1.5, str: responseStr.result.error!.localizedDescription)
                return
            }
            // 4.将结果回调出去
            finishedCallback(result)
        }
        
    }
    
    
// MARK: - 开启网络监听
    class func startOpenNetWorkListening(){
        
        manager?.listener = { status in
//            var title = ""
            switch status {
            case .notReachable:
                YYFLog("网络状态 :没有网络连接" )
//                title = "没有网络连接"
                isFirstShowZAlert = false
                break;
            case .unknown:
                YYFLog("网络状态 :未知" )
//                title = "未知网络"
                isFirstShowZAlert = false
                break;
            case .reachable(.ethernetOrWiFi):
                YYFLog("网络状态 :切换到蜂窝网络/Wifi" )
//                title = "切换到WIFI网络"
                break;
            case .reachable(.wwan):
                YYFLog("网络状态 :切换到WIFI网络" )
//                title = "切换到蜂窝网络"
                break;
            }
            if isFirstShowZAlert {
                isFirstShowZAlert = false
                return
            }
//            ZAlertViewManager.shareManager.showWith(type: AlertViewType.NetStatus, title: title)
//            ZAlertViewManager.shareManager.dismissAlertWith(time: 2)
        }
        
        manager?.startListening()
    }
    
// MARK: - 状态栏小菊花
    class func statusLineNetworkflower(_ isBool:Bool){
        UIApplication.shared.isNetworkActivityIndicatorVisible = isBool
    }
    
    class func netFail() {
        
    }
    
    
}
