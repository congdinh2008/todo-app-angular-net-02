import { TestBed } from '@angular/core/testing';
import { PermissionService } from './permission.service';
import { AUTH_SERVICE } from '../../constants/injection.constant';
import { MockAuthService } from '../../testing/mock-services';

describe('PermissionService', () => {
  let service: PermissionService;
  let mockAuthService: MockAuthService;

  beforeEach(() => {
    mockAuthService = new MockAuthService();
    
    TestBed.configureTestingModule({
      providers: [
        PermissionService,
        { provide: AUTH_SERVICE, useValue: mockAuthService }
      ]
    });
    service = TestBed.inject(PermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
