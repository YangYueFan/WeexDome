//
//  KSVProgressHUD.swift
//  SG_Student_Swift
//
//  Created by 科技部iOS on 2017/11/2.
//  Copyright © 2017年 Ken. All rights reserved.
//

import UIKit


class KSVProgressHUD: NSObject {
    
}

/// ****************************************************************************
// MARK: - SVProgressHUD
extension SVProgressHUD {

    class func show(timeInterval:TimeInterval , str : String?) {
        DispatchQueue.main.async {
            SVProgressHUD.showInfo(withStatus: str)
            SVProgressHUD.setDefaultMaskType(.black)
            SVProgressHUD.dismiss(withDelay: timeInterval)
        }
    }
    class func showSuccess(timeInterval:TimeInterval , str : String?) {
        DispatchQueue.main.async {
            SVProgressHUD.show(#imageLiteral(resourceName: "hud_success"), status: str)
            SVProgressHUD.setDefaultMaskType(.black)
            SVProgressHUD.dismiss(withDelay: timeInterval)
        }
        
    }
    class func showError(timeInterval:TimeInterval , str : String?) {
        DispatchQueue.main.async {
            SVProgressHUD.show(UIImage.init(named: "hud_false")!, status: str)
            SVProgressHUD.setDefaultMaskType(.black)
            SVProgressHUD.dismiss(withDelay: timeInterval)
        }
        
    }
    
    class func showSuccess(timeInterval:TimeInterval , str : String? ,completion:@escaping SVProgressHUDDismissCompletion)  {
        DispatchQueue.main.async {
            SVProgressHUD.show(UIImage.init(named: "hud_success")!, status: str)
            SVProgressHUD.setDefaultMaskType(.black)
            SVProgressHUD.dismiss(withDelay: timeInterval, completion: completion)
        }
    }
    class func showBlackProgress(progress:Float ,status:String?)  {
        DispatchQueue.main.async {
            SVProgressHUD.dismiss()
            SVProgressHUD.showProgress(progress, status: status)
            
        }
    }
}
