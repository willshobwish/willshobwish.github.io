import { DeferBlockBehavior, DeferBlockState, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      deferBlockBehavior: DeferBlockBehavior.Manual,
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio and its main sections', async () => {
    const fixture = TestBed.createComponent(App);
    const deferredSections = await fixture.getDeferBlocks();
    expect(deferredSections).toHaveLength(3);
    for (const section of deferredSections) {
      await section.render(DeferBlockState.Complete);
    }
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Willian Murayama');
    expect(compiled.querySelector('#pesquisa')?.textContent).toContain('Iniciação científica');
    expect(compiled.querySelector('#projetos')?.textContent).toContain('Modelos de trabalho em LaTeX');
    expect(compiled.querySelector('#materiais')?.textContent).toContain('Introdução à impressão 3D');
    expect(compiled.querySelectorAll('app-research-card')).toHaveLength(2);
    expect(compiled.querySelectorAll('app-repository-card')).toHaveLength(3);
    expect(compiled.querySelectorAll('app-resource-card')).toHaveLength(3);
  });
});
