/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "DemoDefine.h"
#import <WeexSDK/WeexSDK.h>
#import <AVFoundation/AVFoundation.h>
#import "WeexSDKManager.h"

@interface AppDelegate ()
@end

@implementation AppDelegate

#pragma mark
#pragma mark application

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    
    [WeexSDKManager setup];
    
    [self.window makeKeyAndVisible];
    
    // Override point for customization after application launch.
//    [self startSplashScreen];
    [self loadCustomTabbarCTL];
    
    return YES;
}

- (void)loadCustomTabbarCTL{
    UITabBarController *tabbarCtl = [[UITabBarController alloc]init];
    
    NSArray * ctlNameArr = @[@"_TtC8WeexDemo13YYF_Frist_CTL",
                             @"_TtC8WeexDemo12YYF_Weex_CTL",
                             @"_TtC8WeexDemo13YYF_Third_CTL",
                             @"_TtC8WeexDemo14YYF_Fourth_CTL"];
    NSMutableArray * ctlArr = [NSMutableArray array];
    for (NSString *ctlName in ctlNameArr) {
        [ctlArr addObject:[self getNavCTL:ctlName]];
    }
    tabbarCtl.viewControllers = ctlArr;
    self.window.rootViewController = tabbarCtl;
    
}

-(UINavigationController *)getNavCTL:(NSString *)ctlName{
    UIViewController *vc = [[NSClassFromString(ctlName) alloc] init];
    vc.title = [ctlName componentsSeparatedByString:@"_"][2];
    if ([ctlName containsString:@"YYF_Weex_CTL"]) {
        YYF_Weex_CTL *ctl = (YYF_Weex_CTL *)vc;
        ctl.url = [NSURL URLWithString:local_weex_home_URL];
    }
    return  [[UINavigationController alloc]initWithRootViewController:vc];
}

#pragma mark 
#pragma mark animation when startup

- (void)startSplashScreen
{
    UIView* splashView = [[UIView alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    splashView.backgroundColor = WEEX_COLOR;
    
    UIImageView *iconImageView = [UIImageView new];
    UIImage *icon = [UIImage imageWithContentsOfFile:[[NSBundle mainBundle] pathForResource:@"weex-icon" ofType:@"png"]];
    if ([icon respondsToSelector:@selector(imageWithRenderingMode:)]) {
        iconImageView.image = [icon imageWithRenderingMode:UIImageRenderingModeAlwaysTemplate];
        iconImageView.tintColor = [UIColor whiteColor];
    } else {
        iconImageView.image = icon;
    }
    iconImageView.frame = CGRectMake(0, 0, 320, 320);
    iconImageView.contentMode = UIViewContentModeScaleAspectFit;
    iconImageView.center = splashView.center;
    [splashView addSubview:iconImageView];
    
    [self.window addSubview:splashView];
    
    float animationDuration = 1.4;
    CGFloat shrinkDuration = animationDuration * 0.3;
    CGFloat growDuration = animationDuration * 0.7;
    
    if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 7.0) {
        [UIView animateWithDuration:shrinkDuration delay:1.0 usingSpringWithDamping:0.7f initialSpringVelocity:10 options:UIViewAnimationOptionCurveEaseInOut animations:^{
            CGAffineTransform scaleTransform = CGAffineTransformMakeScale(0.75, 0.75);
            iconImageView.transform = scaleTransform;
        } completion:^(BOOL finished) {
            [UIView animateWithDuration:growDuration animations:^{
                CGAffineTransform scaleTransform = CGAffineTransformMakeScale(20, 20);
                iconImageView.transform = scaleTransform;
                splashView.alpha = 0;
            } completion:^(BOOL finished) {
                [splashView removeFromSuperview];
            }];
        }];
    } else {
        [UIView animateWithDuration:shrinkDuration delay:1.0 options:0 animations:^{
            CGAffineTransform scaleTransform = CGAffineTransformMakeScale(0.75, 0.75);
            iconImageView.transform = scaleTransform;
        } completion:^(BOOL finished) {
            [UIView animateWithDuration:growDuration animations:^{
                CGAffineTransform scaleTransform = CGAffineTransformMakeScale(20, 20);
                iconImageView.transform = scaleTransform;
                splashView.alpha = 0;
            } completion:^(BOOL finished) {
                [splashView removeFromSuperview];
            }];
        }];
    }
}

@end
