//
//  YYF_WebPage_Module.m
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/25.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "YYF_WebPage_Module.h"

@interface YYF_WebPage_Module ()

@end

@implementation YYF_WebPage_Module

WX_EXPORT_METHOD(@selector(goWebPage:));

-(void)goWebPage:(NSString*)url{
    YYF_Web_CTL *ctl = [YYF_Web_CTL new];
    ctl.url = url;
    [self.weexInstance.viewController.navigationController pushViewController:ctl animated:true];
}

@end
