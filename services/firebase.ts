
/**
 * Mock Firebase implementation. 
 * Since the user will provide credentials later, 
 * we use a singleton-style mock that simulates the core functionality.
 */

class MockFirebaseAuth {
  private currentUser: any = null;
  private listeners: Function[] = [];

  onAuthStateChanged(callback: Function) {
    this.listeners.push(callback);
    callback(this.currentUser);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  async signInWithEmailAndPassword(email: string, pass: string) {
    await new Promise(r => setTimeout(r, 800));
    this.currentUser = { 
      uid: 'mock-user-id', 
      email, 
      displayName: 'Timileyin User',
      photoURL: 'https://picsum.photos/seed/user/100/100'
    };
    this.notify();
    return { user: this.currentUser };
  }

  async createUserWithEmailAndPassword(email: string, pass: string) {
    await new Promise(r => setTimeout(r, 800));
    this.currentUser = { 
      uid: 'mock-user-id', 
      email, 
      displayName: 'New Member',
      photoURL: null
    };
    this.notify();
    return { user: this.currentUser };
  }

  async signOut() {
    await new Promise(r => setTimeout(r, 400));
    this.currentUser = null;
    this.notify();
  }

  private notify() {
    this.listeners.forEach(l => l(this.currentUser));
  }
}

export const auth = new MockFirebaseAuth();
