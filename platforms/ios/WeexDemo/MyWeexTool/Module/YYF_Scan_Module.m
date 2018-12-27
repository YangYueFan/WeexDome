//
//  YYF_Weex_Module.m
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/19.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "YYF_Scan_Module.h"
#import "RHScanViewController.h"
@implementation YYF_Scan_Module

// 把scanCode 方法暴露给weex,这步一定要做,否则weex将无法解析到js文件中的 Scan_Module 模块的scanCode 方法
WX_EXPORT_METHOD(@selector(scanCode:))

-(void)scanCode:(CallBlock)callback{
    // 下面这个是我定义的扫描二维码的原生类
    RHScanViewController *scanVC= [[RHScanViewController alloc]init];
    // 将回调函数传递给scanVC 视图控制器,如果扫描到二维码将值传递给此闭包函数
    scanVC.scanBlock = callback;
    scanVC.isOpenInterestRect = YES;
    scanVC.isVideoZoom = NO;
    scanVC.cameraInvokeMsg = @"相机启动中";
    [self.weexInstance.viewController.navigationController pushViewController:scanVC animated:true];
}

@end
