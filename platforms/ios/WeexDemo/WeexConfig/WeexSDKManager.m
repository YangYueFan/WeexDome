//
//  WeexSDKManager.m
//  WeexDemo
//
//  Created by yangshengtao on 16/11/14.
//  Copyright © 2016年 taobao. All rights reserved.
//

#import "WeexSDKManager.h"
#import "DemoDefine.h"
#import <WeexSDK/WeexSDK.h>
//#import "WXDemoViewController.h"

#import "WXImgLoaderDefaultImpl.h"
#import "WXDemoViewController.h"
#import "WXWebSocketHandler.h"
#import "YYF_Weex_Module.h"

@implementation WeexSDKManager

+ (void)setup;
{
    NSURL *url = nil;
#if DEBUG
    //If you are debugging in device , please change the host to current IP of your computer.
    url = [NSURL URLWithString:HOME_URL];
#else
    url = [NSURL URLWithString:BUNDLE_URL];
#endif
    NSString * entryURL = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"WXEntryBundleURL"];
    if (entryURL) {
        if ([entryURL hasPrefix:@"http"]) {
            url = [NSURL URLWithString:entryURL];
        } else {
            url = [NSURL URLWithString:[NSString stringWithFormat:@"%@%@",[[NSBundle bundleForClass:self] resourceURL].absoluteString, entryURL]];
        }
    }
    
#ifdef UITEST
    url = [NSURL URLWithString:UITEST_HOME_URL];
#endif
    
    [self initWeexSDK];
//    [self loadCustomContainWithScannerWithUrl:url];
}

+ (void)initWeexSDK
{
//    [WXAppConfiguration setAppGroup:@"AliApp"];
//    [WXAppConfiguration setAppName:@"WeexDemo"];
//    [WXAppConfiguration setAppVersion:@"1.8.3"];
//    [WXAppConfiguration setExternalUserAgent:@"ExternalUA"];
    
    [WXSDKEngine initSDKEnvironment];
    
    //注册
    [WXSDKEngine registerHandler:[WXImgLoaderDefaultImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];
    [WXSDKEngine registerModule:@"Scan_Module" withClass:[YYF_Scan_Module class]];
    [WXSDKEngine registerModule:@"CameraAlert_Module" withClass:[YYF_CameraAlert_Module class]];
    [WXSDKEngine registerModule:@"camera" withClass:[YYF_CameraAlert_Module class]];
    [WXSDKEngine registerModule:@"WebPage_Module" withClass:[YYF_WebPage_Module class]];
    [WXSDKEngine registerModule:@"Location_Module" withClass:[YYF_Location_Module class]];

 
#ifdef DEBUG
    [WXLog setLogLevel:WXLogLevelError];
#endif
}

+ (void)loadCustomContainWithScannerWithUrl:(NSURL *)url
{
    UIViewController *demo = [[WXDemoViewController alloc] init];
    ((WXDemoViewController *)demo).url = url;
    [[UIApplication sharedApplication] delegate].window.rootViewController = [[WXRootViewController alloc] initWithRootViewController:demo];
}



@end
