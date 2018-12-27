//
//  YYF_Third_CTL.swift
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/19.
//  Copyright © 2018 taobao. All rights reserved.
//

import UIKit
import SwiftyJSON

class YYF_Third_CTL: UIViewController ,UITableViewDelegate,UITableViewDataSource{
    
    
    @IBOutlet weak var myTableView: UITableView!
    var dataArr = [JSON]()
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        loadNetword()
        self.myTableView.tableFooterView = UIView()
    }
    

    
    func loadNetword() {
        KNetworkTool.requestJSONData(.get, URLString: "http://10.11.46.16:3000/api/demo", parameters: nil, isHud: true) { (json) in
            YYFLog(json)
            self.dataArr = json.arrayValue
            if self.dataArr.count == 0 {
                self.dataArr.append(json)
            }
            self.myTableView.reloadData()
            
        }
    }
    
    //MARK: - 代理 : UITableViewDelegate / UITableViewDataSource
    func numberOfSections(in tableView: UITableView) -> Int {
        return self.dataArr.count
    }
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.dataArr.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        var cell = tableView.dequeueReusableCell(withIdentifier: "Cell")
        if cell == nil {
            cell = UITableViewCell.init(style: .subtitle, reuseIdentifier:  "Cell")
        }
        cell?.textLabel?.text = self.dataArr[indexPath.row]["title"].stringValue
        cell?.detailTextLabel?.text = self.dataArr[indexPath.row]["url"].stringValue
        return cell!
    }
    func tableView(_ tableView: UITableView, willDisplay cell: UITableViewCell, forRowAt indexPath: IndexPath) {
        
    }
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 49
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        let weexCTL = YYF_Weex_CTL()
        
        weexCTL.url = self.dataArr[indexPath.row]["url"].url
        weexCTL.hidesBottomBarWhenPushed = true
        weexCTL.title = self.dataArr[indexPath.row]["title"].stringValue
        self.navigationController?.pushViewController(weexCTL, animated: true)
    }
    
    
    
    
    
    


}
