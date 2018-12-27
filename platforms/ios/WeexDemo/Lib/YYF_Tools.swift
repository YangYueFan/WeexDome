//
//  YYF_Tools.swift
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/25.
//  Copyright © 2018 taobao. All rights reserved.
//

import UIKit

//封装的日志输出功能（T表示不指定日志信息参数类型）
func YYFLog<T>(_ message:T, file:String = #file, function:String = #function,
               line:Int = #line) {
    #if isDEBUG
    //获取文件名
    let fileName = (file as NSString).lastPathComponent
    //打印日志内容
    print("\(fileName)_line\(line)_\(function) : \(message)")
    #endif
}

class YYF_Tools: NSObject {

}
