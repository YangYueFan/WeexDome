//
//  YYF_Base_Module.h
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/21.
//  Copyright © 2018 taobao. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <WeexSDK/WeexSDK.h>
NS_ASSUME_NONNULL_BEGIN
typedef void (^CallBlock)(NSDictionary*); // 定义回调函数
typedef void (^ActionBlcok)(NSInteger index,NSString * actionText); // 定义回调函数
@interface YYF_Base_Module : NSObject<WXModuleProtocol>
//用Copy
@property(nonatomic,copy)WXModuleCallback callback;


/**
 显示Alert

 @param title title description
 @param msg msg description
 @param cancelText cancelText description
 @param confirmText confirmText description
 @param handleBlock handleBlock description
 */
-(void)showAlert:(NSString *)title
         message:(NSString *)msg
      cancelText:(NSString *)cancelText
     confirmText:(NSString *)confirmText
   confirmHandle:(void (^)(void))handleBlock;


/**
 显示Sheet

 @param title title description
 @param msg msg description
 @param confirmTexts confirmTexts description
 @param handleBlock ActionBlcok description
 */
-(void)showSheet:(nullable NSString *)title
         message:(nullable NSString *)msg
    confirmTexts:(NSArray *)confirmTexts
   confirmHandle:(ActionBlcok)handleBlock;

@end

NS_ASSUME_NONNULL_END
