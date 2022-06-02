/*
    V1.0
*/
import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';



import {
    UpdateProfileRequestDto,
    GetProfileRequestDto,
    CreateRequestDto,
    OwnerIsProRequestDto,
    ChangePasswordRequestDto,
    FindOneUserRequestDto,
    FindOneMemberRequestDto,
    FindOneUserByEmailRequestDto,
    GetSubscribedGroupsRequestDto,
    UnsubscribeFromGroupRequestDto,
    GetBlockedMembersRequestDto,
    DeleteBlockedMemberRequestDto,
    AddBlockedMembersRequestDto,
    SignupSettingsRequestDto,
    GetNewsletterSubscriptionsRequestDto,
    UpdateNewsletterSubscriptionRequestDto,
 } from './request';

import {
    UpdateProfileResponseDto,
    GetProfileResponseDto,
    CreateResponseDto,
    OwnerIsProResponseDto,
    ChangePasswordResponseDto,
    FindOneUserResponseDto,
    FindOneMemberResponseDto,
    FindOneUserByEmailResponseDto,
    GetSubscribedGroupsResponseDto,
    UnsubscribeFromGroupResponseDto,
    GetBlockedMembersResponseDto,
    DeleteBlockedMemberResponseDto,
    AddBlockedMembersResponseDto,
    SignupSettingsResponseDto,
    GetNewsletterSubscriptionsResponseDto,
    UpdateNewsletterSubscriptionResponseDto,
 } from './response';


export interface IMembersMicroservice {
    updateProfile(
        request: UpdateProfileRequestDto, 
        metadata?: Metadata
    ): Promise<UpdateProfileResponseDto> | Observable<UpdateProfileResponseDto>;
    getProfile(
        request: GetProfileRequestDto, 
        metadata?: Metadata
    ): Promise<GetProfileResponseDto> | Observable<GetProfileResponseDto>;
    create(
        request: CreateRequestDto, 
        metadata?: Metadata
    ): Promise<CreateResponseDto> | Observable<CreateResponseDto>;
    ownerIsPro(
        request: OwnerIsProRequestDto, 
        metadata?: Metadata
    ): Promise<OwnerIsProResponseDto> | Observable<OwnerIsProResponseDto>;
    changePassword(
        request: ChangePasswordRequestDto, 
        metadata?: Metadata
    ): Promise<ChangePasswordResponseDto> | Observable<ChangePasswordResponseDto>;
    findOneUser(
        request: FindOneUserRequestDto, 
        metadata?: Metadata
    ): Promise<FindOneUserResponseDto> | Observable<FindOneUserResponseDto>;
    findOneMember(
        request: FindOneMemberRequestDto, 
        metadata?: Metadata
    ): Promise<FindOneMemberResponseDto> | Observable<FindOneMemberResponseDto>;
    findOneUserByEmail(
        request: FindOneUserByEmailRequestDto, 
        metadata?: Metadata
    ): Promise<FindOneUserByEmailResponseDto> | Observable<FindOneUserByEmailResponseDto>;
    getSubscribedGroups(
        request: GetSubscribedGroupsRequestDto, 
        metadata?: Metadata
    ): Promise<GetSubscribedGroupsResponseDto> | Observable<GetSubscribedGroupsResponseDto>;
    unsubscribeFromGroup(
        request: UnsubscribeFromGroupRequestDto, 
        metadata?: Metadata
    ): Promise<UnsubscribeFromGroupResponseDto> | Observable<UnsubscribeFromGroupResponseDto>;
    getBlockedMembers(
        request: GetBlockedMembersRequestDto, 
        metadata?: Metadata
    ): Promise<GetBlockedMembersResponseDto> | Observable<GetBlockedMembersResponseDto>;
    deleteBlockedMember(
        request: DeleteBlockedMemberRequestDto, 
        metadata?: Metadata
    ): Promise<DeleteBlockedMemberResponseDto> | Observable<DeleteBlockedMemberResponseDto>;
    addBlockedMembers(
        request: AddBlockedMembersRequestDto, 
        metadata?: Metadata
    ): Promise<AddBlockedMembersResponseDto> | Observable<AddBlockedMembersResponseDto>;
    signupSettings(
        request: SignupSettingsRequestDto, 
        metadata?: Metadata
    ): Promise<SignupSettingsResponseDto> | Observable<SignupSettingsResponseDto>;
    getNewsletterSubscriptions(
        request: GetNewsletterSubscriptionsRequestDto, 
        metadata?: Metadata
    ): Promise<GetNewsletterSubscriptionsResponseDto> | Observable<GetNewsletterSubscriptionsResponseDto>;
    updateNewsletterSubscription(
        request: UpdateNewsletterSubscriptionRequestDto, 
        metadata?: Metadata
    ): Promise<UpdateNewsletterSubscriptionResponseDto> | Observable<UpdateNewsletterSubscriptionResponseDto>;
}









