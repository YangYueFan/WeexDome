//
//  YYF_Frist_CTL.swift
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/19.
//  Copyright © 2018 taobao. All rights reserved.
//

import UIKit

class YYF_Frist_CTL: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationController?.navigationBar.isHidden = true
        
    }
    
    @IBAction func unzipAction(_ sender: UIButton) {
        let zipPath = Bundle.main.path(forResource: "bundlejs", ofType: "zip")
        if zipPath != nil {
            let _ = MyWeexTool.share.unzip(with: zipPath!)
        }
    }
    
    @IBAction func loadWeexAction(_ sender: UIButton) {
        let urlPath = self.getWeexFile_JSIndexFilePath()
        if urlPath != nil {
            let weexCTL = YYF_Weex_CTL()
            
            weexCTL.url = URL.init(fileURLWithPath: urlPath!)
            weexCTL.hidesBottomBarWhenPushed = true
            weexCTL.title = "本地Weex"
            self.navigationController?.pushViewController(weexCTL, animated: true)
        }
    }
    
    
    
    @IBAction func removeFileAction(_ sender: UIButton) {
        MyWeexTool.share.removeOldWeexFile()
    }
    
    func getWeexFile_JSIndexFilePath() -> String? {
        let arr = try? MyWeexTool.share.myFileManager.contentsOfDirectory(atPath: weexFilePath)
        if arr != nil {
            if arr!.count > 0 {
                return (weexFilePath as NSString).appendingPathComponent("bundlejs/index.js")
            }
        }
        return nil
    }
    
}
