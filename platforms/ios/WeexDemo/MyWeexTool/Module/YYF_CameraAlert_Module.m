//
//  CameraAlertModule.m
//  WeexDemo
//
//  Created by hubao on 2018/12/12.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "YYF_CameraAlert_Module.h"
@interface YYF_CameraAlert_Module ()<UIImagePickerControllerDelegate,UINavigationControllerDelegate>

@end
@implementation YYF_CameraAlert_Module

//暴露给weex使用
WX_EXPORT_METHOD(@selector(cameraAlertSheet:));
WX_EXPORT_METHOD(@selector(choosePhoto:));

-(void)choosePhoto:(WXModuleCallback)callback{
    [self cameraAlertSheet:callback];
}

-(void)cameraAlertSheet:(WXModuleCallback)callback{
    self.callback = callback;
    
    [self showSheet:nil message:nil confirmTexts:@[@"拍照上传",@"本地相册"] confirmHandle:^(NSInteger index, NSString * _Nonnull actionText) {
        if (index == 0){
            //拍照上传
            UIImagePickerController *imagePicker = [[UIImagePickerController alloc] init];
            imagePicker.delegate = self;
            imagePicker.allowsEditing = true;
            if([UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypeCamera]){
                imagePicker.sourceType = UIImagePickerControllerSourceTypeCamera;
            }
            [self.weexInstance.viewController.navigationController  presentViewController:imagePicker animated:true completion:nil];
        }else{
            //本地相册
            UIImagePickerController *pickerImage = [[UIImagePickerController alloc] init];
            pickerImage.allowsEditing = true;
            if([UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypePhotoLibrary]) {
                pickerImage.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
                pickerImage.mediaTypes = [UIImagePickerController availableMediaTypesForSourceType:pickerImage.sourceType];
            }
            
            pickerImage.delegate = self;
            pickerImage.allowsEditing = YES;
            [self.weexInstance.viewController.navigationController  presentViewController:pickerImage animated:true completion:nil];
        }
    }];
}

- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary<UIImagePickerControllerInfoKey,id> *)info{
    //关闭相册界面
    [picker dismissViewControllerAnimated:YES completion:^{
        NSString *type = [info objectForKey:UIImagePickerControllerMediaType];
        //当选择的类型是图片
        if ([type isEqualToString:@"public.image"])
        {
            //先把图片转成NSData
            UIImage* image = [info objectForKey:@"UIImagePickerControllerEditedImage"];
            NSData *data;
            if (UIImagePNGRepresentation(image) ==nil){
                data = UIImageJPEGRepresentation(image,0.5);
            }else{
                data = UIImagePNGRepresentation(image);
            }
            //图片保存的路径Caches目录：
            NSString  *cachesPath = NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES).firstObject;
            
            [self removeOldWeexImage:cachesPath];
            
            NSString *pngPath = [cachesPath stringByAppendingPathComponent:[NSString stringWithFormat:@"weex_image_%@.png",[YYF_DateTool getNowTimeTimestamp]]];
            
            [data writeToFile:pngPath atomically:true];

            self.callback(@{@"path":[NSString stringWithFormat:@"file://%@",pngPath],
                            @"url":[NSString stringWithFormat:@"file://%@",pngPath],
                            });
        }
    }];
}

// 取消选取图片
- (void)imagePickerControllerDidCancel:(UIImagePickerController *)picker
{
    self.callback(nil);
    [picker dismissViewControllerAnimated:YES completion:nil];
}

/**
 删除沙盒带有weex_image_文件名的图片
 @param cachesPath
 */
-(void)removeOldWeexImage:(NSString *)cachesPath{
    NSFileManager *fileManager = [NSFileManager defaultManager];
    NSArray *files = [fileManager subpathsAtPath:cachesPath];
    for (NSString *fileName in files) {
        if ([fileName containsString:@"weex_image_"]) {
            NSError *error;
            [fileManager removeItemAtPath:[cachesPath stringByAppendingPathComponent:fileName] error:&error];
            if (error!=nil) {
                NSLog(@"%@ is remove",fileName);
            }
        }
    }
}

@end
