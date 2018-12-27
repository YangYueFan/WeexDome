//
//  MyWeexTool.swift
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/19.
//  Copyright © 2018 taobao. All rights reserved.
//

import UIKit
import ZipArchive
//临时目录
let tempPath = NSTemporaryDirectory()
let documentsPath = NSHomeDirectory() + "/Documents"
let weexFilePath = documentsPath + "/Weex"


class MyWeexTool: NSObject {
    //单例
    static let share = MyWeexTool()
    let myFileManager = FileManager.default
    
    /// 解压文件
    ///
    /// - Parameters:
    ///   - path: 要解压的文件目录
    ///   - destinationPath: 解压到目录
    ///   - fileName: 解压文件名
    /// - Returns: 是否成功
    func unzip(with path:String,
               destinationPath:String = weexFilePath) -> Bool{
        if myFileManager.fileExists(atPath: destinationPath) == false{
            do {
                try myFileManager.createDirectory(atPath: destinationPath, withIntermediateDirectories: true, attributes: nil)
            }catch {
                print("create Directory fail")
                return false
            }
        }
        

        // Unzip
//        return ZipArchive.unzipFile(atPath: path, toDestination: weexFilePath, progressHandler: nil, completionHandler: { (path, bool, error) in
//            if error == nil {
//                let files = try? self.myFileManager.contentsOfDirectory(atPath: weexFilePath)
//                print(files ?? "no file" )
//            }
//        })
        return SSZipArchive.unzipFile(atPath: path, toDestination: destinationPath, progressHandler: nil, completionHandler: { (path, bool, error) in
            if error == nil {
                let files = try? self.myFileManager.contentsOfDirectory(atPath: destinationPath)
                print(files ?? "no file" )
            }
        })
    }
    
    func removeOldWeexFile() {
        let bundlejsPath = (weexFilePath as NSString).appendingPathComponent("bundlejs")
        if myFileManager.fileExists(atPath: bundlejsPath) != false{
            do {
                try myFileManager.removeItem(atPath: bundlejsPath)
                let files = try? self.myFileManager.contentsOfDirectory(atPath: weexFilePath)
                print(files ?? "weexFilePath no file" )
            }catch {
                print("removeOldWeexFile fail")
            }
        }
    }
    
}
