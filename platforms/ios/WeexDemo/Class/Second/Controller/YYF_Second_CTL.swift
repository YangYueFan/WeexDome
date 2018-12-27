//
//  YYF_Second_CTL.swift
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/19.
//  Copyright © 2018 taobao. All rights reserved.
//

import UIKit

class YYF_Second_CTL: UIViewController ,UITableViewDelegate,UITableViewDataSource{

    var dataArr = ["HomeMenuList"]
    
    @IBOutlet weak var myTableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.myTableView.delegate = self
        self.myTableView.dataSource = self
        self.myTableView.tableFooterView = UIView()
        self.myTableView.reloadData()
    }
    
    //MARK: - 代理 : UITableViewDelegate / UITableViewDataSource
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.dataArr.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        var cell = tableView.dequeueReusableCell(withIdentifier: "Cell")
        if cell == nil {
            cell = UITableViewCell.init(style: .default, reuseIdentifier:  "Cell")
        }
        cell?.textLabel?.text = dataArr[indexPath.row]
        return cell!
    }
    func tableView(_ tableView: UITableView, willDisplay cell: UITableViewCell, forRowAt indexPath: IndexPath) {
        
    }
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 49
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        let urlPath = Bundle.main.url(forResource: dataArr[indexPath.row].components(separatedBy: " ")[0], withExtension: "js")
//        switch indexPath.row {
//        case 0:
//            urlPath = Bundle.main.url(forResource: "Scan", withExtension: "js")
//            break;
//        case 1:
//            urlPath = Bundle.main.url(forResource: "UploadIcon", withExtension: "js")
//            break;
//        default:
//            break;
//        }
        if urlPath != nil {
            let weexCTL = YYF_Weex_CTL()
            
            weexCTL.url = urlPath
            weexCTL.hidesBottomBarWhenPushed = true
            weexCTL.title = dataArr[indexPath.row]
            self.navigationController?.pushViewController(weexCTL, animated: true)
//            self.navigationController?.present(weexCTL, animated: true, completion: nil)
        }
    }
    

    
    
}
